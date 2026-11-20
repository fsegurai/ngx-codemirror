---
label: Types
description: The Theme, Setup, Orientation, RevertControls, RenderRevertControl and DiffEditorModel types and the External annotation.
order: 4
tags: [ "api", "types" ]
keywords: [ "Theme", "Setup", "Orientation", "DiffEditorModel", "External" ]
---

# Types

Declared next to the components and exported from the package root.

| Export | Definition | Declared in |
|--------|------------|-------------|
| `Theme` | `'light' \| Extension` | `code-editor.component.ts` |
| `Setup` | `'basic' \| 'minimal' \| null` | `code-editor.component.ts` |
| `External` | `Annotation.define<boolean>()` | `code-editor.component.ts` |
| `Orientation` | `'a-b' \| 'b-a'` | `code-diff-editor.component.ts` |
| `RevertControls` | `'a-to-b' \| 'b-to-a'` | `code-diff-editor.component.ts` |
| `RenderRevertControl` | `() => HTMLElement` | `code-diff-editor.component.ts` |
| `DiffEditorModel` | `interface { original: string; modified: string }` | `code-diff-editor.component.ts` |

`Extension` and `Annotation` come from `@codemirror/state`.

The diff editor source imports `External`, `Setup` and `Theme` from the package name `ngx-codemirror` (a workspace
alias) instead of a relative path. The 20.0.0 release notes list this as fixed; see
[Troubleshooting](../help/troubleshooting.md).
