import { ChangeDetectionStrategy, Component, input, model, output, signal, viewChild } from '@angular/core';
import { EditorView, type KeyBinding } from '@codemirror/view';
import { CodeUnifiedDiffEditorComponent } from 'ngx-codemirror';
import type { CommonInputs, EditorEvent, UnifiedDiffInputs } from '../../playground.models';
import { shallowSame } from '../../playground.models';
import {
  ChunkNavigatorComponent,
  type ChunkPosition,
  chunkPositionOf,
} from '../chunk-navigator/chunk-navigator.component';
import { errorEvent, plainEvent, valueEvent } from '../mode-events';
import { MODE_STYLES } from '../mode-styles';

/** The unified diff editor of the playground, with its change navigator (also Alt-↑/Alt-↓ in the editor). */
@Component({
  selector: 'app-unified-diff-mode',
  imports: [CodeUnifiedDiffEditorComponent, ChunkNavigatorComponent],
  template: `
    <app-chunk-navigator [position]="position()" (previous)="previousChunk()" (next)="nextChunk()" />
    <ngx-code-unified-diff-editor class="editor"
                                  [(original)]="original"
                                  [(value)]="value"
                                  [theme]="common().theme"
                                  [language]="common().language"
                                  [languages]="common().languages"
                                  [setup]="common().setup"
                                  [disabled]="common().disabled"
                                  [readonly]="common().readonly"
                                  [placeholder]="common().placeholder"
                                  [indentWithTab]="common().indentWithTab"
                                  [indentUnit]="common().indentUnit"
                                  [tabSize]="common().tabSize"
                                  [lineWrapping]="common().lineWrapping"
                                  [highlightWhitespace]="common().highlightWhitespace"
                                  [lineNumbers]="common().lineNumbers"
                                  [foldGutter]="common().foldGutter"
                                  [highlightActiveLine]="common().highlightActiveLine"
                                  [search]="common().search"
                                  [autocompletion]="common().autocompletion"
                                  [lint]="common().lint"
                                  [presets]="common().presets"
                                  [keymap]="keymap"
                                  [autoFocus]="unified().autoFocus"
                                  [mergeControls]="unified().mergeControls"
                                  [highlightChanges]="unified().highlightChanges"
                                  [gutter]="unified().gutter"
                                  [syntaxHighlightDeletions]="unified().syntaxHighlightDeletions"
                                  [allowInlineDiffs]="unified().allowInlineDiffs"
                                  [collapseUnchanged]="unified().collapseUnchanged"
                                  [extensions]="tracker"
                                  (ready)="onReady()"
                                  (valueChange)="event.emit(valueEvent('valueChange', $event))"
                                  (originalChange)="event.emit(valueEvent('originalChange', $event))"
                                  (focused)="event.emit(plainEvent('focused'))"
                                  (blurred)="event.emit(plainEvent('blurred'))"
                                  (touch)="event.emit(plainEvent('touch'))"
                                  (error)="event.emit(errorEvent($event))" />
  `,
  styles: MODE_STYLES,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnifiedDiffModeComponent {
  /** The inputs every mode binds. */
  readonly common = input.required<CommonInputs>();
  /** The inputs of the unified diff editor only. */
  readonly unified = input.required<UnifiedDiffInputs>();
  /** The document the editor content is compared with. */
  readonly original = model.required<string>();
  /** The editor content. */
  readonly value = model.required<string>();
  /** The editor's outputs, as log events. */
  readonly event = output<EditorEvent>();

  private readonly editor = viewChild.required(CodeUnifiedDiffEditorComponent);

  /** The position of the selection among the changes. */
  protected readonly position = signal<ChunkPosition>({ current: 0, total: 0 }, { equal: shallowSame });

  /** Alt-↑/Alt-↓ move between changes, over the setup's move-line bindings. */
  protected readonly keymap: readonly KeyBinding[] = [
    { key: 'Alt-ArrowUp', run: () => this.previousChunk() },
    { key: 'Alt-ArrowDown', run: () => this.nextChunk() },
  ];

  /** Follows the selection and the chunks. */
  protected readonly tracker = EditorView.updateListener.of((update) =>
    this.position.set(chunkPositionOf(this.editor().getChunks(), update.state.selection.main.head)),
  );

  protected readonly plainEvent = plainEvent;
  protected readonly valueEvent = valueEvent;
  protected readonly errorEvent = errorEvent;

  protected onReady(): void {
    this.refresh();
    this.event.emit(plainEvent('ready', 'EditorView created'));
  }

  protected previousChunk(): boolean {
    const moved = this.editor().goToPreviousChunk();
    this.refresh();
    return moved;
  }

  protected nextChunk(): boolean {
    const moved = this.editor().goToNextChunk();
    this.refresh();
    return moved;
  }

  private refresh(): void {
    const view = this.editor().view();
    if (view) this.position.set(chunkPositionOf(this.editor().getChunks(), view.state.selection.main.head));
  }
}
