import { isPlatformBrowser, Location } from '@angular/common';
import {
  computed,
  DOCUMENT,
  effect,
  Injectable,
  inject,
  PLATFORM_ID,
  type Signal,
  signal,
  untracked,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toRevertControls } from '@app/constants/const-codemirror-diff-orientation';
import { DEMO_LINT } from '@app/constants/const-codemirror-extensions';
import { EDITOR_LANGUAGES } from '@app/constants/const-codemirror-languages';
import { toSetup } from '@app/constants/const-codemirror-setup';
import {
  type CommonInputs,
  type ConfigEntry,
  changedOptions,
  DEFAULT_OPTIONS,
  type EditorInputs,
  type PlaygroundOptions,
  type SplitDiffInputs,
  shallowSame,
  type UnifiedDiffInputs,
} from './playground.models';
import { parseOptions, toQueryParams } from './playground-options';

/** The `localStorage` key of the playground options. */
export const PLAYGROUND_STORAGE_KEY = 'ngx-codemirror:playground';

/** The `collapseUnchanged` value of the playground switch. */
const COLLAPSE_UNCHANGED = { margin: 3, minSize: 4 } as const;

/**
 * The options of the playground: one signal, read through `computed` slices, kept in `localStorage` and in the URL.
 * Provided by the playground component, so it lives as long as the page.
 *
 * On creation the options come from the URL query params when any is valid (a share link), else from
 * `localStorage`, else the defaults. Unknown keys and invalid values are ignored.
 */
@Injectable()
export class PlaygroundStateService {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _options = signal<PlaygroundOptions>(this.initialOptions());

  /** Every option. */
  readonly options: Signal<PlaygroundOptions> = this._options.asReadonly();

  /** The inputs every mode binds. */
  readonly common: Signal<CommonInputs> = computed(
    () => {
      const o = this._options();
      return {
        theme: o.theme || undefined,
        language: o.language,
        languages: EDITOR_LANGUAGES,
        setup: toSetup(o.setup),
        disabled: o.disabled,
        readonly: o.readonly,
        placeholder: o.placeholder || undefined,
        indentWithTab: o.indentWithTab,
        indentUnit: o.indentUnit,
        tabSize: o.tabSize,
        lineWrapping: o.lineWrapping,
        highlightWhitespace: o.highlightWhitespace,
        lineNumbers: o.lineNumbers,
        foldGutter: o.foldGutter,
        highlightActiveLine: o.highlightActiveLine,
        search: o.search,
        autocompletion: o.autocompletion,
        lint: o.lint ? DEMO_LINT : null,
        presets: o.presets,
      };
    },
    { equal: shallowSame },
  );

  /** The inputs of the code editor only. */
  readonly editor: Signal<EditorInputs> = computed(() => ({ autoFocus: this._options().autoFocus }), {
    equal: shallowSame,
  });

  /** The inputs of the split diff editor only. */
  readonly diff: Signal<SplitDiffInputs> = computed(
    () => {
      const o = this._options();
      return {
        orientation: o.orientation,
        revertControls: toRevertControls(o.revertControls),
        highlightChanges: o.highlightChanges,
        gutter: o.gutter,
        collapseUnchanged: o.collapseUnchanged ? COLLAPSE_UNCHANGED : undefined,
        originalReadonly: o.originalReadonly,
      };
    },
    { equal: shallowSame },
  );

  /** The inputs of the unified diff editor only. */
  readonly unified: Signal<UnifiedDiffInputs> = computed(
    () => {
      const o = this._options();
      return {
        autoFocus: o.autoFocus,
        mergeControls: o.mergeControls,
        highlightChanges: o.highlightChanges,
        gutter: o.gutter,
        syntaxHighlightDeletions: o.syntaxHighlightDeletions,
        allowInlineDiffs: o.allowInlineDiffs,
        collapseUnchanged: o.collapseUnchanged ? COLLAPSE_UNCHANGED : undefined,
      };
    },
    { equal: shallowSame },
  );

  /** The mode. */
  readonly mode = computed(() => this._options().mode);

  /** The language. */
  readonly language = computed(() => this._options().language);

  /** The options that differ from their default. */
  readonly changed: Signal<ConfigEntry[]> = computed(() => changedOptions(this._options()));

  constructor() {
    // Keep the options in localStorage and in the URL (non-default ones only, replacing the history entry).
    effect(() => {
      const options = this._options();
      untracked(() => {
        this.store(options);
        this.syncUrl(options);
      });
    });
  }

  /** Changes some options. */
  patch(changes: Partial<PlaygroundOptions>): void {
    this._options.update((options) => ({ ...options, ...changes }));
  }

  /** Goes back to the default options. */
  reset(): void {
    this._options.set(DEFAULT_OPTIONS);
  }

  /** The absolute URL of the playground with the current options, to share. */
  shareUrl(): string {
    const tree = this.router.createUrlTree([], { relativeTo: this.route, queryParams: toQueryParams(this.options()) });
    const path = this.location.prepareExternalUrl(this.router.serializeUrl(tree));
    return new URL(path, this.document.location.origin).toString();
  }

  private initialOptions(): PlaygroundOptions {
    const query = this.route.snapshot.queryParamMap;
    const fromUrl = parseOptions(Object.fromEntries(query.keys.map((key) => [key, query.get(key)])));
    if (fromUrl.found > 0) return fromUrl.options;

    const stored = this.readStored();
    return stored ? parseOptions(stored).options : DEFAULT_OPTIONS;
  }

  private readStored(): Record<string, unknown> | null {
    if (!this.isBrowser) return null;
    try {
      const value: unknown = JSON.parse(localStorage.getItem(PLAYGROUND_STORAGE_KEY) ?? 'null');
      return value !== null && typeof value === 'object' && !Array.isArray(value)
        ? (value as Record<string, unknown>)
        : null;
    } catch {
      // Unavailable storage (private mode, blocked site data) or a corrupt entry: start from the defaults.
      return null;
    }
  }

  private store(options: PlaygroundOptions): void {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(PLAYGROUND_STORAGE_KEY, JSON.stringify(options));
    } catch {
      // Unavailable storage: the options still apply for this visit, and the URL keeps them.
    }
  }

  private syncUrl(options: PlaygroundOptions): void {
    const queryParams = toQueryParams(options);
    const current = this.route.snapshot.queryParamMap;
    const unchanged =
      current.keys.length === Object.keys(queryParams).length &&
      current.keys.every((key) => current.get(key) === queryParams[key]);
    if (unchanged) return;

    void this.router.navigate([], { relativeTo: this.route, queryParams, replaceUrl: true });
  }
}
