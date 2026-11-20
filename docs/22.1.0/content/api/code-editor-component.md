---
label: CodeEditorComponent
description: Inputs, outputs, signals and methods of ngx-code-editor.
order: 2
tags: [ "api", "editor" ]
keywords: [ "ngx-code-editor", "getValue", "setValue", "view" ]
---

# CodeEditorComponent

Selectors: `ngx-code-editor`, `code-editor`, `[code-editor]`. Takes every [shared input and output](shared-inputs.md),
plus:

| Input / output | Type | Description |
|----------------|------|-------------|
| `value` | `model<string>` | The document. Two-way bindable; used by the forms integration. Default `''`. |
| `extensions` | `ExtensionInput` | Extra extensions, eager or lazy, after the global ones. |
| `root` | `Document \| ShadowRoot` | The DOM root (read at creation). |
| `autoFocus` | `boolean` | Focuses the editor on creation. Default `false`. |
| `(valueChange)` | `string` | A user edit or `setValue()` (writes from the parent do not emit). |
| `(focused)` / `(blurred)` | `void` | Focus changes. |
| `(ready)` | `EditorView` | Emitted once, right after the view is created. |

## Signals and methods

| Member | Signature | Description |
|--------|-----------|-------------|
| `view` | `Signal<EditorView \| undefined>` | The view; `undefined` before the first render, on the server and after destroy. |
| `focus()` | `(): void` | Focuses the editor. |
| `getValue()` | `(): string` | The editor's content, or the value it will start with. |
| `setValue()` | `(value: string): void` | Replaces the document as an `External` change, keeps the selection (clamped), sets `value` and emits `valueChange` once. |

To change the value without a `valueChange` emission, set it from the parent (`value` or the form) instead.
