---
label: Convenience Inputs
description: Inputs for common CodeMirror features such as line numbers, search, autocompletion, lint and key bindings.
order: 7
tags: [ "features", "inputs" ]
keywords: [ "lineNumbers", "foldGutter", "autocompletion", "tabSize", "keymap" ]
---

# Convenience Inputs

Common CodeMirror features have their own inputs, so they need no extension code. With `setup="basic"` the boolean
ones default to on; with another setup they default to off. An explicit value always wins.

| Input | Type | Default |
|-------|------|---------|
| `lineNumbers` | `boolean` | on with `'basic'` |
| `foldGutter` | `boolean` | on with `'basic'` |
| `highlightActiveLine` | `boolean` | on with `'basic'` |
| `search` | `boolean \| SearchConfig` | on with `'basic'` |
| `autocompletion` | `boolean \| AutocompletionConfig` | on with `'basic'` |
| `tabSize` | `number` | `4` |
| `lint` | `LintOption \| null` | none (`null` turns the provider's linter off) |
| `keymap` | `readonly KeyBinding[]` | none (high precedence) |

```html
<ngx-code-editor [formField]="f.code" [lineNumbers]="false" [tabSize]="2" [lint]="{ source: myLinter, gutter: true }" />
```

## Setup

`setup` is `'basic'` (default), `'minimal'` or `null`. `'basic'` is CodeMirror's `basicSetup` without the parts owned
by the inputs above; each of those parts lives in its own compartment, so toggling one never reconfigures the others.

Every input here can also be set app-wide in [`provideCodeEditor()`](../getting-started/configuration.md).
