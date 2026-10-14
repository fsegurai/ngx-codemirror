---
label: CodeDiffEditorComponent
description: Every input, output and public field of ngx-code-diff-editor in 19.0.0.
order: 2
tags: [ "api", "diff" ]
keywords: [ "ngx-code-diff-editor", "MergeView", "DiffEditorModel", "DiffConfig" ]
---

# CodeDiffEditorComponent

Selectors: `ngx-code-diff-editor`, `code-diff-editor`, `[diff-editor]`. Host class `diff-editor`. `OnPush`,
`ViewEncapsulation.None`. Implements `ControlValueAccessor` (value type [`DiffEditorModel`](types.md)).

## Inputs

Every input is an `@Input()` field.

| Input | Type | Default | Notes |
|-------|------|---------|-------|
| `theme` | [`Theme`](types.md) | `'light'` | Both sides. |
| `setup` | [`Setup`](types.md) | `'basic'` | Both sides. |
| `originalValue` | `string` | `''` | Editor A. |
| `originalExtensions` | `Extension[]` | `[]` | Editor A only. |
| `modifiedValue` | `string` | `''` | Editor B. |
| `modifiedExtensions` | `Extension[]` | `[]` | Editor B only. |
| `orientation` | [`Orientation`](types.md) `\| undefined` | `undefined` (`'a-b'`) | |
| `revertControls` | [`RevertControls`](types.md) `\| undefined` | `undefined` | |
| `renderRevertControl` | [`RenderRevertControl`](types.md) `\| undefined` | `undefined` | |
| `highlightChanges` | `boolean` (attribute) | `true` | |
| `gutter` | `boolean` (attribute) | `true` | |
| `disabled` | `boolean` (attribute) | `false` | Both sides. |
| `collapseUnchanged` | `{ margin?: number; minSize?: number } \| undefined` | `undefined` | `margin` 3, `minSize` 4 by CodeMirror default. |
| `diffConfig` | `DiffConfig \| undefined` | `undefined` | From `@codemirror/merge`. |

The doc comments mark `setup` and `originalExtensions` as not changing dynamically. The source still handles a change
to `setup`, `originalExtensions` or `modifiedExtensions` by reconfiguring both editors.

## Outputs

Declared with `@Output()` as `EventEmitter`.

| Output | Payload |
|--------|---------|
| `originalValueChange` | `string` |
| `originalFocus` / `originalBlur` | `void` |
| `modifiedValueChange` | `string` |
| `modifiedFocus` / `modifiedBlur` | `void` |

Because `originalValue` / `originalValueChange` (and the `modified` pair) follow the `x` / `xChange` naming,
`[(originalValue)]` and `[(modifiedValue)]` banana bindings compile in Angular 19.

## Public fields

| Field | Type |
|-------|------|
| `mergeView` | `MergeView \| undefined` |
