import {
  cursorCharLeft,
  cursorCharRight,
  cursorLineBoundaryBackward,
  cursorLineBoundaryForward,
  cursorLineDown,
  cursorLineUp,
  deleteToLineEnd,
} from '@codemirror/commands';
import type { Diagnostic, LintSource } from '@codemirror/lint';
import { type Extension, Prec } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import type { LazyExtension, LintOption } from 'ngx-codemirror';

/**
 * A few Emacs-style bindings. A plain `KeyBinding` list in a high-precedence keymap: no extra dependency needed.
 * `Ctrl-f`/`Ctrl-b` use `Alt` here, so the search panel keeps `Mod-f`.
 */
const emacsKeys: Extension = Prec.high(
  keymap.of([
    { key: 'Ctrl-a', run: cursorLineBoundaryBackward },
    { key: 'Ctrl-e', run: cursorLineBoundaryForward },
    { key: 'Ctrl-n', run: cursorLineDown },
    { key: 'Ctrl-p', run: cursorLineUp },
    { key: 'Alt-f', run: cursorCharRight },
    { key: 'Alt-b', run: cursorCharLeft },
    { key: 'Ctrl-k', run: deleteToLineEnd },
  ]),
);

/** Highlights trailing whitespace. Lazy, to show a preset loaded on first use. */
const trailingWhitespace: LazyExtension = () => import('@codemirror/view').then((m) => m.highlightTrailingWhitespace());

/** The presets registered with `withExtensionPresets()` in `app.config.ts`. */
export const DEMO_PRESETS: Readonly<Record<string, Extension | LazyExtension>> = {
  'emacs-keys': emacsKeys,
  'trailing-whitespace': trailingWhitespace,
};

/** The options of the playground preset picker. */
export const PRESET_OPTIONS: readonly { readonly viewValue: string; readonly value: string }[] = [
  { viewValue: 'Emacs-style keys (Ctrl-a/e/n/p/k)', value: 'emacs-keys' },
  { viewValue: 'Trailing whitespace (lazy)', value: 'trailing-whitespace' },
];

/** Flags every `TODO` and `FIXME` as a warning. A minimal lint source for the demo. */
const todoLinter: LintSource = (view) => {
  const diagnostics: Diagnostic[] = [];
  const text = view.state.doc.toString();
  for (const match of text.matchAll(/\b(TODO|FIXME)\b/g)) {
    diagnostics.push({
      from: match.index,
      to: match.index + match[0].length,
      severity: 'warning',
      message: `${match[1]} left in the code`,
    });
  }
  return diagnostics;
};

/** The playground's `lint` option: the TODO linter with a lint gutter. */
export const DEMO_LINT: LintOption = { source: todoLinter, gutter: true };
