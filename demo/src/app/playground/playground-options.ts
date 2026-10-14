import { DIFF_ORIENTATIONS, DIFF_REVERT_CONTROLS } from '@app/constants/const-codemirror-diff-orientation';
import { PRESET_OPTIONS } from '@app/constants/const-codemirror-extensions';
import { findLanguage } from '@app/constants/const-codemirror-languages';
import { PLAYGROUND_MODES } from '@app/constants/const-codemirror-mode';
import { SETUP_OPTIONS } from '@app/constants/const-codemirror-setup';
import { DEFAULT_OPTIONS, OPTION_KEYS, type PlaygroundOptions, sameValue } from './playground.models';

/** Reads one option from a stored (JSON) or URL (string) value; `undefined` when the value is not valid. */
type Parser<T> = (raw: unknown) => T | undefined;

const bool: Parser<boolean> = (raw) => {
  if (raw === true || raw === 'true') return true;
  if (raw === false || raw === 'false') return false;
  return undefined;
};

const integer =
  (min: number, max: number): Parser<number> =>
  (raw) => {
    const value = typeof raw === 'string' && raw.trim() !== '' ? Number(raw) : raw;
    return typeof value === 'number' && Number.isInteger(value) && value >= min && value <= max ? value : undefined;
  };

const oneOf =
  <T extends string>(options: readonly { readonly value: T }[]): Parser<T> =>
  (raw) =>
    options.find((option) => option.value === raw)?.value;

/** The parser of every option. Unknown languages and presets are dropped; any well-formed theme name is kept, so
 * an unregistered one reaches the editor and shows its `error` event. */
const PARSERS: { readonly [K in keyof PlaygroundOptions]: Parser<PlaygroundOptions[K]> } = {
  mode: oneOf(PLAYGROUND_MODES),
  language: (raw) => (typeof raw === 'string' ? findLanguage(raw)?.name : undefined),
  theme: (raw) => (typeof raw === 'string' && /^[\w-]{0,64}$/.test(raw) ? raw : undefined),
  setup: oneOf(SETUP_OPTIONS),
  disabled: bool,
  readonly: bool,
  placeholder: (raw) => (typeof raw === 'string' && raw.length <= 200 ? raw : undefined),
  autoFocus: bool,
  indentWithTab: bool,
  indentUnit: integer(1, 16),
  tabSize: integer(1, 16),
  lineWrapping: bool,
  highlightWhitespace: bool,
  lineNumbers: bool,
  foldGutter: bool,
  highlightActiveLine: bool,
  search: bool,
  autocompletion: bool,
  lint: bool,
  presets: (raw) => {
    const items = typeof raw === 'string' ? (raw ? raw.split(',') : []) : raw;
    if (!Array.isArray(items)) return undefined;
    const known = PRESET_OPTIONS.map((preset) => preset.value);
    // Known presets only, each once, in the picker order.
    return known.filter((preset) => items.includes(preset));
  },
  highlightChanges: bool,
  gutter: bool,
  collapseUnchanged: bool,
  orientation: oneOf(DIFF_ORIENTATIONS),
  revertControls: oneOf(DIFF_REVERT_CONTROLS),
  originalReadonly: bool,
  mergeControls: bool,
  syntaxHighlightDeletions: bool,
  allowInlineDiffs: bool,
};

/**
 * The valid options of a record (stored JSON or URL query params), over the defaults. Unknown keys and invalid
 * values are ignored.
 *
 * @returns The options and how many of them came from the record.
 */
export function parseOptions(record: Readonly<Record<string, unknown>>): { options: PlaygroundOptions; found: number } {
  const options: Record<string, unknown> = { ...DEFAULT_OPTIONS };
  let found = 0;
  for (const key of OPTION_KEYS) {
    if (!Object.hasOwn(record, key)) continue;
    const value = PARSERS[key](record[key]);
    if (value === undefined) continue;
    options[key] = value;
    found++;
  }
  return { options: options as unknown as PlaygroundOptions, found };
}

/** The URL query params of the options: the ones that differ from their default, as strings. */
export function toQueryParams(options: PlaygroundOptions): Record<string, string> {
  const params: Record<string, string> = {};
  for (const key of OPTION_KEYS) {
    const value = options[key];
    if (sameValue(value, DEFAULT_OPTIONS[key])) continue;
    params[key] = Array.isArray(value) ? value.join(',') : String(value);
  }
  return params;
}
