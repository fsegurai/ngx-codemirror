---
label: Shared Inputs and Outputs
description: Inputs and outputs shared by ngx-code-editor, ngx-code-diff-editor and ngx-code-unified-diff-editor.
order: 1
tags: [ "api", "inputs" ]
keywords: [ "CodeEditorBase", "theme", "setup", "disabled", "readonly" ]
---

# Shared Inputs and Outputs

All three components take these inputs. Option inputs default to `undefined`, so the options of
`provideCodeEditor()` apply; the effective default is shown.

| Input | Type | Effective default | Description |
|-------|------|-------------------|-------------|
| `disabled` | `boolean` | `false` | Not editable and read-only. |
| `readonly` | `boolean` | `false` | Read-only, but can be focused and selected. |
| `invalid` / `required` / `touched` | `boolean` | `false` | Form state, set by the forms integration (`aria-invalid` / `aria-required`). |
| `theme` | `Theme` | `'light'` | See [Themes](../features/themes.md). |
| `placeholder` | `string` | none | Shown when the document is empty (modified side of a diff editor). |
| `indentWithTab` | `boolean` | `false` | The Tab key indents. |
| `indentUnit` | `IndentUnit` | CodeMirror's | Spaces (`0` = default) or a whitespace string such as `'\t'`. |
| `lineWrapping` | `boolean` | `false` | Wraps long lines. |
| `highlightWhitespace` | `boolean` | `false` | Highlights whitespace characters. |
| `languages` | `readonly LanguageDescription[]` | none | The languages `language` is looked up in. |
| `language` | `string` | `''` | Language name or alias (case-insensitive). |
| `setup` | `Setup` | `'basic'` | `'basic'`, `'minimal'` or `null`. |
| `presets` | `readonly string[]` | none | Presets registered with `withExtensionPresets()`. |
| `tabSize` | `number` | `4` | Width of a tab character, in columns. |
| `lineNumbers` | `boolean` | on with `'basic'` | Line number gutter. |
| `foldGutter` | `boolean` | on with `'basic'` | Fold gutter. |
| `highlightActiveLine` | `boolean` | on with `'basic'` | Active line highlighting. |
| `search` | `boolean \| SearchConfig` | on with `'basic'` | Search panel and keymap. |
| `autocompletion` | `boolean \| AutocompletionConfig` | on with `'basic'` | Autocompletion. |
| `lint` | `LintOption \| null` | none | Linter; `null` turns off the provider's linter. |
| `keymap` | `readonly KeyBinding[]` | none | Extra key bindings, high precedence. |

Boolean inputs accept attribute syntax (`<ngx-code-editor readonly />`).

## Shared outputs

| Output | Payload | Emitted when |
|--------|---------|--------------|
| `touch` | `void` | The user finishes interacting (on blur); marks a bound field touched. |
| `error` | `CodeEditorError` | An input cannot be applied. See [Errors](errors.md). |
