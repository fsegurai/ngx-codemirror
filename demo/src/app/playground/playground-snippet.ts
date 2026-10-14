import type { PlaygroundMode } from '@app/constants/const-codemirror-mode';
import { DEFAULT_OPTIONS, type PlaygroundOptions, sameValue } from './playground.models';

/** The options every mode binds. */
const COMMON_KEYS = [
  'theme',
  'setup',
  'disabled',
  'readonly',
  'placeholder',
  'indentWithTab',
  'indentUnit',
  'tabSize',
  'lineWrapping',
  'highlightWhitespace',
  'lineNumbers',
  'foldGutter',
  'highlightActiveLine',
  'search',
  'autocompletion',
  'lint',
  'presets',
] as const satisfies readonly (keyof PlaygroundOptions)[];

/** The options each mode binds, in the order of the snippet. */
export const MODE_KEYS: Readonly<Record<PlaygroundMode, readonly (keyof PlaygroundOptions)[]>> = {
  editor: [...COMMON_KEYS, 'autoFocus'],
  diff: [
    ...COMMON_KEYS,
    'orientation',
    'revertControls',
    'highlightChanges',
    'gutter',
    'collapseUnchanged',
    'originalReadonly',
  ],
  'unified-diff': [
    ...COMMON_KEYS,
    'autoFocus',
    'mergeControls',
    'highlightChanges',
    'gutter',
    'syntaxHighlightDeletions',
    'allowInlineDiffs',
    'collapseUnchanged',
  ],
};

/** The convenience inputs that the library turns on by default with the `'basic'` setup only. */
const BASIC_SETUP_KEYS: ReadonlySet<keyof PlaygroundOptions> = new Set([
  'lineNumbers',
  'foldGutter',
  'highlightActiveLine',
  'search',
  'autocompletion',
]);

const OPENING: Readonly<Record<PlaygroundMode, string>> = {
  editor: '<ngx-code-editor [(value)]="code"',
  diff: '<ngx-code-diff-editor [(value)]="diff"',
  'unified-diff': '<ngx-code-unified-diff-editor [original]="original" [(value)]="code"',
};

/**
 * The template of the current editor, with only the bindings that differ from the library defaults (plus the
 * language). The `lint` binding refers to a `lint` property the consumer defines (the demo's TODO linter).
 */
export function buildSnippet(options: PlaygroundOptions): string {
  const lines = [OPENING[options.mode], `language="${options.language}"`, '[languages]="languages"'];
  for (const key of MODE_KEYS[options.mode]) {
    const value = options[key];
    // A convenience input left out is on with 'basic' only: the snippet sets it whenever that differs.
    const libraryDefault = BASIC_SETUP_KEYS.has(key) ? options.setup === 'basic' : DEFAULT_OPTIONS[key];
    if (sameValue(value, libraryDefault)) continue;
    lines.push(binding(key, value));
  }
  return `${lines.join('\n  ')} />`;
}

function binding(key: keyof PlaygroundOptions, value: PlaygroundOptions[keyof PlaygroundOptions]): string {
  switch (key) {
    case 'setup':
      return value === 'none' ? '[setup]="null"' : `setup="${String(value)}"`;
    case 'lint':
      return '[lint]="lint"';
    case 'collapseUnchanged':
      return '[collapseUnchanged]="{ margin: 3, minSize: 4 }"';
    case 'presets':
      return `[presets]="[${(value as readonly string[]).map((preset) => `'${preset}'`).join(', ')}]"`;
    case 'theme':
    case 'placeholder':
    case 'orientation':
    case 'revertControls':
      return `${key}="${escapeAttribute(String(value))}"`;
    default:
      return `[${key}]="${String(value)}"`;
  }
}

function escapeAttribute(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}
