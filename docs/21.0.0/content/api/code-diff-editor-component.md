---
label: CodeDiffEditorComponent
description: Every input and output of ngx-code-diff-editor in 21.0.0.
order: 2
tags: [ "api", "diff" ]
keywords: [ "ngx-code-diff-editor", "MergeView", "DiffEditorModel", "DiffConfig" ]
---

# CodeDiffEditorComponent

Selectors: `ngx-code-diff-editor`, `code-diff-editor`, `[diff-editor]`. Host class `diff-editor`. `OnPush`,
`ViewEncapsulation.None`. Implements `ControlValueAccessor` (value type [`DiffEditorModel`](types.md)).

## Inputs

| Input | Type | Default | Notes |
|-------|------|---------|-------|
| `theme` | [`Theme`](types.md) | `'light'` | Both sides. |
| `setup` | [`Setup`](types.md) | `'basic'` | Both sides. |
| `originalValue` | `string` (`model`) | `''` | Editor A. Two-way. |
| `originalExtensions` | `Extension[]` | `[]` | Editor A only. |
| `modifiedValue` | `string` (`model`) | `''` | Editor B. Two-way. |
| `modifiedExtensions` | `Extension[]` | `[]` | Editor B only. |
| `orientation` | [`Orientation`](types.md) `\| undefined` | `undefined` (`'a-b'`) | |
| `revertControls` | [`RevertControls`](types.md) `\| undefined` | `undefined` | |
| `renderRevertControl` | [`RenderRevertControl`](types.md) `\| undefined` | `undefined` | |
| `highlightChanges` | `boolean` (attribute) | `true` | |
| `gutter` | `boolean` (attribute) | `true` | |
| `disabled` | `boolean` (`model`) | `false` | Both sides. Two-way. |
| `collapseUnchanged` | `{ margin?: number; minSize?: number } \| undefined` | `undefined` | `margin` 3, `minSize` 4 by CodeMirror default. |
| `diffConfig` | `DiffConfig \| undefined` | `undefined` | From `@codemirror/merge`. |

The doc comments mark `setup` and `originalExtensions` as not changing dynamically. The source still handles a change
to `setup`, `originalExtensions` or `modifiedExtensions` by reconfiguring both editors.

## Outputs

| Output | Payload |
|--------|---------|
| `originalValueChange` | `string` |
| `originalFocus` / `originalBlur` | `void` |
| `modifiedValueChange` | `string` |
| `modifiedFocus` / `modifiedBlur` | `void` |

The `MergeView` instance is private.
