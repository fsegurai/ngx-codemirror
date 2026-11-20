---
label: Types
description: The Theme, Setup, Orientation, RevertControls, RenderRevertControl and DiffEditorModel types and the External annotation.
order: 4
tags: [ "api", "types" ]
keywords: [ "Theme", "Setup", "Orientation", "DiffEditorModel", "External" ]
---

# Types

Declared in `configuration/editor-attributes.ts` and exported from the package root.

| Export | Definition |
|--------|------------|
| `Theme` | `'light' \| Extension` |
| `Setup` | `'basic' \| 'minimal' \| null` |
| `Orientation` | `'a-b' \| 'b-a'` |
| `RevertControls` | `'a-to-b' \| 'b-to-a'` |
| `RenderRevertControl` | `() => HTMLElement` |
| `DiffEditorModel` | `interface { original: string; modified: string }` |
| `External` | `Annotation.define<boolean>()` |

`Extension` and `Annotation` come from `@codemirror/state`.
