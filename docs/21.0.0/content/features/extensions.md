---
label: Extensions
description: Choose the basic or minimal setup and append your own CodeMirror extensions.
order: 5
tags: [ "features", "extensions" ]
keywords: [ "basicSetup", "minimalSetup", "Extension", "Setup" ]
---

# Extensions

## Setup

`setup` picks the built-in bundle from the `codemirror` package.

| Value | Bundle |
|-------|--------|
| `'basic'` (default) | `basicSetup`: line numbers, folding, search, autocompletion and more. |
| `'minimal'` | `minimalSetup`: history, default keymap, special characters. |
| `null` | Nothing; you supply every extension. |

## Your own extensions

`extensions` (code editor) and `originalExtensions` / `modifiedExtensions` (diff editor) take `Extension[]`. They are
appended after the setup bundle.

```typescript
import { EditorView } from '@codemirror/view';
import { lintGutter } from '@codemirror/lint';

protected readonly extensions = [lintGutter(), EditorView.contentAttributes.of({ 'aria-label': 'Code' })];
```

## Changing setup or extensions later

A change to `setup` or the extension inputs reconfigures the whole editor state with `StateEffect.reconfigure`. The
internal compartments (theme, readonly, placeholder, language and so on) are rebuilt empty, so those options are not
re-applied until their own input changes. Prefer stable extension arrays (class fields, not template literals).

## The External annotation

`External` is an exported `Annotation<boolean>`. The update listener does not emit `change` for transactions
annotated with it. The components do not add it themselves in this release.
