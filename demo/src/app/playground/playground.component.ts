import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Clipboard } from '@angular/cdk/clipboard';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { disabled, form, readonly } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltip } from '@angular/material/tooltip';
import { findLanguage } from '@app/constants/const-codemirror-languages';
import { PLAYGROUND_MODES, type PlaygroundMode } from '@app/constants/const-codemirror-mode';
import { applyThemeMergeStyles, DARK_EDITOR_THEME, THEME_OPTIONS } from '@app/constants/const-codemirror-themes';
import { PageLayoutService } from '@shared/page-layout';
import { ScrollspyNavLayoutComponent } from '@shared/scrollspy-nav-layout';
import { CodeEditorThemeService, type DiffEditorModel } from 'ngx-codemirror';
import { EditorModeComponent } from './components/editor-mode/editor-mode.component';
import { InspectorComponent } from './components/inspector/inspector.component';
import { OptionsPanelComponent } from './components/options-panel/options-panel.component';
import { SplitDiffModeComponent } from './components/split-diff-mode/split-diff-mode.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UnifiedDiffModeComponent } from './components/unified-diff-mode/unified-diff-mode.component';
import { EventLogStore } from './event-log.store';
import { LangSampleService } from './lang-sample.service';
import {
  DEFAULT_OPTIONS,
  type EditorEvent,
  type EditorEventName,
  type PlaygroundDocuments,
  type PlaygroundOptions,
} from './playground.models';
import { documentsOf, sameDocuments } from './playground-samples';
import { buildSnippet } from './playground-snippet';
import { PlaygroundStateService } from './playground-state.service';

/** The events merged while they repeat (typing): one log entry per burst. */
const DEBOUNCED_EVENTS: ReadonlySet<EditorEventName> = new Set([
  'valueChange',
  'originalChange',
  'originalValueChange',
  'modifiedValueChange',
]);

/** How long the "Undo" of a replaced document stays offered. */
const UNDO_DURATION_MS = 8000;

/**
 * The playground page: wires the options state, the language samples and the event log to the presentational
 * toolbar, options panel, mode editors and inspector.
 */
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  providers: [PlaygroundStateService, LangSampleService, EventLogStore],
  imports: [
    ScrollspyNavLayoutComponent,
    ToolbarComponent,
    OptionsPanelComponent,
    EditorModeComponent,
    SplitDiffModeComponent,
    UnifiedDiffModeComponent,
    InspectorComponent,
    MatButtonModule,
    MatTooltip,
  ],
  host: {
    '(document:keydown.escape)': 'exitFullscreen()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PlaygroundComponent {
  protected readonly state = inject(PlaygroundStateService);
  protected readonly samples = inject(LangSampleService);
  protected readonly log = inject(EventLogStore);
  private readonly snackBar = inject(MatSnackBar);
  private readonly announcer = inject(LiveAnnouncer);
  private readonly clipboard = inject(Clipboard);
  private readonly codeEditorTheme = inject(CodeEditorThemeService);
  private readonly document = inject(DOCUMENT);

  /* The documents of each mode; the code editor's is a Signal Forms field (disabled/readonly from the schema). */
  protected readonly editorModel = signal({ code: '' });
  protected readonly editorForm = form(this.editorModel, (path) => {
    disabled(path.code, { when: () => this.state.common().disabled });
    readonly(path.code, { when: () => this.state.common().readonly });
  });
  protected readonly diffValue = signal<DiffEditorModel>({ original: '', modified: '' });
  protected readonly unifiedOriginal = signal('');
  protected readonly unifiedValue = signal('');

  /** The documents of the latest loaded sample, to tell whether the user edited them. */
  private loadedDocuments: PlaygroundDocuments | null = null;

  /** Whether the editor fills the window. */
  protected readonly fullscreen = signal(false);
  /** Whether the theme bundle is being loaded (the merge colors wait for it). */
  protected readonly themeLoading = signal(false);

  protected readonly modeLabel = computed(() => labelOf(PLAYGROUND_MODES, this.state.mode()));

  /** The bound model of the current mode, as text. */
  protected readonly model = computed(() => {
    switch (this.state.mode()) {
      case 'editor':
        return this.editorModel().code;
      case 'diff':
        return JSON.stringify(this.diffValue(), null, 2);
      case 'unified-diff':
        return JSON.stringify({ original: this.unifiedOriginal(), value: this.unifiedValue() }, null, 2);
    }
  });

  protected readonly modelLabel = computed(() => {
    switch (this.state.mode()) {
      case 'editor':
        return 'value: string';
      case 'diff':
        return 'value: { original, modified }';
      case 'unified-diff':
        return '{ original, value }';
    }
  });

  private readonly themeName = computed(() => this.state.options().theme);

  constructor() {
    const pageLayout = inject(PageLayoutService);
    pageLayout.setWide(true);
    inject(DestroyRef).onDestroy(() => pageLayout.setWide(false));

    // A new language loads its sample into every mode.
    effect(() => {
      const language = this.state.language();
      untracked(() => void this.loadSample(language));
    });

    // The diff colors follow the theme the editors use: the picked one, else the app theme.
    effect(() => {
      const appTheme = this.codeEditorTheme.theme();
      const theme = this.themeName() || appTheme;
      untracked(
        () => void this.applyMergeStyles(typeof theme === 'string' ? theme : undefined, appTheme === DARK_EDITOR_THEME),
      );
    });
  }

  protected patch(changes: Partial<PlaygroundOptions>): void {
    this.state.patch(changes);
  }

  protected onMode(mode: PlaygroundMode): void {
    this.state.patch({ mode });
    void this.announcer.announce(`${labelOf(PLAYGROUND_MODES, mode)} mode`);
  }

  protected onLanguage(language: string): void {
    this.state.patch({ language });
  }

  protected onTheme(theme: string): void {
    this.state.patch({ theme });
    void this.announcer.announce(`Theme: ${labelOf(THEME_OPTIONS, theme)}`);
  }

  protected onEditorEvent(event: EditorEvent): void {
    if (DEBOUNCED_EVENTS.has(event.name)) {
      this.log.logDebounced(event.name, event.detail, event.failed);
    } else {
      this.log.log(event.name, event.detail, event.failed);
    }
  }

  /** Restores the default options; when the language stays, the edited sample is restored too (with Undo). */
  protected reset(): void {
    const keepsLanguage = this.state.language() === DEFAULT_OPTIONS.language;
    this.state.reset();
    this.log.log('reset', 'every option back to its default');
    if (keepsLanguage && this.loadedDocuments && !sameDocuments(this.documents(), this.loadedDocuments)) {
      this.replaceDocuments(this.loadedDocuments, 'Options and sample reset');
    } else {
      this.notify('Options reset');
    }
  }

  protected copyShareLink(): void {
    this.notify(this.clipboard.copy(this.state.shareUrl()) ? 'Share link copied' : 'Could not copy the link');
  }

  protected copySnippet(): void {
    this.notify(
      this.clipboard.copy(buildSnippet(this.state.options())) ? 'Snippet copied' : 'Could not copy the snippet',
    );
  }

  protected onModelCopied(copied: boolean): void {
    this.notify(copied ? 'Model copied' : 'Could not copy the model');
  }

  /** Downloads the editor content (the modified document in the diff modes). */
  protected download(): void {
    const mode = this.state.mode();
    const content =
      mode === 'editor' ? this.editorModel().code : mode === 'diff' ? this.diffValue().modified : this.unifiedValue();
    const extension = findLanguage(this.state.language())?.extensions[0] ?? 'txt';
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
    const link = this.document.createElement('a');
    link.href = url;
    link.download = `playground.${extension}`;
    link.click();
    URL.revokeObjectURL(url);
  }

  protected toggleFullscreen(): void {
    this.fullscreen.update((fullscreen) => !fullscreen);
  }

  protected exitFullscreen(): void {
    this.fullscreen.set(false);
  }

  /**
   * Loads the sample of a language into every mode. When the user edited the current documents, they can get
   * them back with the "Undo" of the snack bar. A sample superseded by a later language is ignored.
   */
  private async loadSample(language: string): Promise<void> {
    const sample = await this.samples.load(language);
    if (!sample) return;

    if (sample.fallback) this.log.log('sample', this.samples.error() ?? `No sample for ${language}`, true);
    const edited = this.loadedDocuments !== null && !sameDocuments(this.documents(), this.loadedDocuments);
    const next = documentsOf(sample.text);
    if (edited) {
      this.replaceDocuments(next, `Loaded the ${language} sample`);
    } else {
      this.setDocuments(next);
    }
    this.loadedDocuments = next;
  }

  /** Replaces the documents, offering "Undo" to put the current ones back. */
  private replaceDocuments(next: PlaygroundDocuments, message: string): void {
    const previous = this.documents();
    this.setDocuments(next);
    this.snackBar
      .open(message, 'Undo', { duration: UNDO_DURATION_MS })
      .onAction()
      .subscribe(() => {
        this.setDocuments(previous);
        this.log.log('undo', 'previous documents restored');
      });
  }

  private documents(): PlaygroundDocuments {
    return {
      code: this.editorModel().code,
      diff: this.diffValue(),
      unifiedOriginal: this.unifiedOriginal(),
      unifiedValue: this.unifiedValue(),
    };
  }

  private setDocuments(documents: PlaygroundDocuments): void {
    this.editorModel.set({ code: documents.code });
    this.diffValue.set(documents.diff);
    this.unifiedOriginal.set(documents.unifiedOriginal);
    this.unifiedValue.set(documents.unifiedValue);
  }

  private notify(message: string): void {
    this.snackBar.open(message, undefined, { duration: 3000 });
  }

  private async applyMergeStyles(name: string | undefined, dark: boolean): Promise<void> {
    this.themeLoading.set(true);
    try {
      if (await applyThemeMergeStyles(name, dark)) this.themeLoading.set(false);
    } catch {
      this.themeLoading.set(false);
      this.log.log('theme', 'the theme bundle could not be loaded', true);
    }
  }
}

function labelOf(options: readonly { readonly value: string; readonly viewValue: string }[], value: string): string {
  return options.find((option) => option.value === value)?.viewValue ?? value;
}
