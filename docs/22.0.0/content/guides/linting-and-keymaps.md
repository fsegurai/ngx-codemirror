---
label: Linting and Key Bindings
description: Add a lint source and custom key bindings with the lint and keymap inputs.
order: 4
tags: [ "guides", "lint" ]
keywords: [ "LintSource", "LintOption", "KeyBinding", "keymap" ]
---

# Linting and Key Bindings

## Add a linter

`lint` takes a `LintSource`, or `{ source, config?, gutter? }` for linter options and a lint gutter.

```typescript
import type { Diagnostic, LintSource } from '@codemirror/lint';
import type { LintOption } from '@fsegurai/ngx-codemirror';

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

export const lint: LintOption = { source: todoLinter, gutter: true };
```

```html
<ngx-code-editor [(value)]="code" [lint]="lint" />
```

`gutter` is `true` or the lint gutter options; there is no gutter by default. Set `[lint]="null"` to turn off a linter
set in `provideCodeEditor()`.

## Add key bindings

`keymap` takes `readonly KeyBinding[]` with a high precedence, so they win over the setup's bindings.

```typescript
import { cursorLineBoundaryBackward, cursorLineBoundaryForward } from '@codemirror/commands';
import type { KeyBinding } from '@codemirror/view';

protected readonly keys: readonly KeyBinding[] = [
  { key: 'Ctrl-a', run: cursorLineBoundaryBackward },
  { key: 'Ctrl-e', run: cursorLineBoundaryForward },
];
```

```html
<ngx-code-editor [(value)]="code" [keymap]="keys" />
```
