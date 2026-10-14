import type { RevertControlsOption } from '@app/constants/const-codemirror-diff-orientation';
import type { PlaygroundMode } from '@app/constants/const-codemirror-mode';
import type { SetupOption } from '@app/constants/const-codemirror-setup';
import type { LanguageDescription } from '@codemirror/language';
import type {
  CollapseUnchanged,
  DiffEditorModel,
  LintOption,
  Orientation,
  RevertControls,
  Setup,
  Theme,
} from 'ngx-codemirror';

/**
 * Every option of the playground. Plain values only (no extension objects), so the options can be stored in
 * `localStorage` and in the URL. The defaults match the library defaults, so a value that differs from its default
 * is exactly a binding a consumer has to write.
 */
export interface PlaygroundOptions {
  readonly mode: PlaygroundMode;
  readonly language: string;
  /** The theme name; `''` follows the app theme. */
  readonly theme: string;
  readonly setup: SetupOption;
  readonly disabled: boolean;
  readonly readonly: boolean;
  readonly placeholder: string;
  readonly autoFocus: boolean;
  readonly indentWithTab: boolean;
  /** The indent unit, in spaces. */
  readonly indentUnit: number;
  readonly tabSize: number;
  readonly lineWrapping: boolean;
  readonly highlightWhitespace: boolean;
  readonly lineNumbers: boolean;
  readonly foldGutter: boolean;
  readonly highlightActiveLine: boolean;
  readonly search: boolean;
  readonly autocompletion: boolean;
  /** Whether the demo TODO/FIXME linter runs. */
  readonly lint: boolean;
  readonly presets: readonly string[];
  /* Both diff modes */
  readonly highlightChanges: boolean;
  readonly gutter: boolean;
  readonly collapseUnchanged: boolean;
  /* Split diff */
  readonly orientation: Orientation;
  readonly revertControls: RevertControlsOption;
  readonly originalReadonly: boolean;
  /* Unified diff */
  readonly mergeControls: boolean;
  readonly syntaxHighlightDeletions: boolean;
  readonly allowInlineDiffs: boolean;
}

/** The options of a fresh playground. */
export const DEFAULT_OPTIONS: PlaygroundOptions = {
  mode: 'editor',
  language: 'JavaScript',
  theme: '',
  setup: 'basic',
  disabled: false,
  readonly: false,
  placeholder: '',
  autoFocus: false,
  indentWithTab: false,
  indentUnit: 2,
  tabSize: 4,
  lineWrapping: false,
  highlightWhitespace: false,
  lineNumbers: true,
  foldGutter: true,
  highlightActiveLine: true,
  search: true,
  autocompletion: true,
  lint: false,
  presets: [],
  highlightChanges: true,
  gutter: true,
  collapseUnchanged: false,
  orientation: 'a-b',
  revertControls: 'none',
  originalReadonly: false,
  mergeControls: true,
  syntaxHighlightDeletions: true,
  allowInlineDiffs: false,
};

/** The option keys, in the order of `DEFAULT_OPTIONS`. */
export const OPTION_KEYS = Object.keys(DEFAULT_OPTIONS) as readonly (keyof PlaygroundOptions)[];

/** The editor inputs every mode binds the same way. */
export interface CommonInputs {
  readonly theme: Theme | undefined;
  readonly language: string;
  readonly languages: readonly LanguageDescription[];
  readonly setup: Setup;
  readonly disabled: boolean;
  readonly readonly: boolean;
  readonly placeholder: string | undefined;
  readonly indentWithTab: boolean;
  readonly indentUnit: number;
  readonly tabSize: number;
  readonly lineWrapping: boolean;
  readonly highlightWhitespace: boolean;
  readonly lineNumbers: boolean;
  readonly foldGutter: boolean;
  readonly highlightActiveLine: boolean;
  readonly search: boolean;
  readonly autocompletion: boolean;
  readonly lint: LintOption | null;
  readonly presets: readonly string[];
}

/** The inputs only the code editor has. */
export interface EditorInputs {
  readonly autoFocus: boolean;
}

/** The inputs only the split diff editor has. */
export interface SplitDiffInputs {
  readonly orientation: Orientation;
  readonly revertControls: RevertControls | undefined;
  readonly highlightChanges: boolean;
  readonly gutter: boolean;
  readonly collapseUnchanged: CollapseUnchanged | undefined;
  readonly originalReadonly: boolean;
}

/** The inputs only the unified diff editor has. */
export interface UnifiedDiffInputs {
  readonly autoFocus: boolean;
  readonly mergeControls: boolean;
  readonly highlightChanges: boolean;
  readonly gutter: boolean;
  readonly syntaxHighlightDeletions: boolean;
  readonly allowInlineDiffs: boolean;
  readonly collapseUnchanged: CollapseUnchanged | undefined;
}

/** The documents of the three modes. Kept per page visit only: they are not part of the options. */
export interface PlaygroundDocuments {
  readonly code: string;
  readonly diff: DiffEditorModel;
  readonly unifiedOriginal: string;
  readonly unifiedValue: string;
}

/** The name of an event reported by a mode. */
export type EditorEventName =
  | 'ready'
  | 'valueChange'
  | 'originalChange'
  | 'originalValueChange'
  | 'modifiedValueChange'
  | 'focused'
  | 'blurred'
  | 'originalFocused'
  | 'originalBlurred'
  | 'modifiedFocused'
  | 'modifiedBlurred'
  | 'touch'
  | 'error';

/** An event reported by a mode component. */
export interface EditorEvent {
  readonly name: EditorEventName;
  readonly detail: string;
  readonly failed?: boolean;
}

/** One entry of the event log. */
export interface LogEntry {
  readonly id: number;
  /** The local time of the event, `HH:MM:SS.mmm`. */
  readonly time: string;
  readonly name: string;
  readonly detail: string;
  readonly failed: boolean;
}

/** A changed option, as shown by the Config tab. */
export interface ConfigEntry {
  readonly key: keyof PlaygroundOptions;
  readonly value: string;
}

/** Whether two plain values (strings, numbers, booleans or arrays of them) are equal. */
export function sameValue(a: unknown, b: unknown): boolean {
  if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((item, i) => item === b[i]);
  return Object.is(a, b);
}

/** Whether two objects hold the same values, compared with `sameValue` (one level deep). */
export function shallowSame<T extends object>(a: T, b: T): boolean {
  const keys = Object.keys(a) as (keyof T)[];
  return keys.length === Object.keys(b).length && keys.every((key) => sameValue(a[key], b[key]));
}

/** The options that differ from their default, in the order of `DEFAULT_OPTIONS`. */
export function changedOptions(options: PlaygroundOptions): ConfigEntry[] {
  return OPTION_KEYS.filter((key) => !sameValue(options[key], DEFAULT_OPTIONS[key])).map((key) => ({
    key,
    value: formatValue(options[key]),
  }));
}

/** A readable form of an option value. */
export function formatValue(value: unknown): string {
  if (Array.isArray(value)) return value.length ? value.join(', ') : '(none)';
  if (value === '') return '(empty)';
  return String(value);
}
