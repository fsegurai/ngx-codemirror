---
label: CodeDiffEditorComponent
description: Inputs, outputs, signals and methods of ngx-code-diff-editor.
order: 3
tags: [ "api", "diff" ]
keywords: [ "ngx-code-diff-editor", "MergeView", "DiffEditorModel", "getChunks" ]
---

# CodeDiffEditorComponent

Selectors: `ngx-code-diff-editor`, `code-diff-editor`, `[diff-editor]`. Takes every
[shared input and output](shared-inputs.md), plus:

| Input / output | Type | Description |
|----------------|------|-------------|
| `value` | `model<DiffEditorModel>` | Both documents, `{ original, modified }`. Works with forms. |
| `originalValue` / `modifiedValue` | `string` | One side; the latest of these and `value` wins. |
| `originalExtensions` / `modifiedExtensions` | `ExtensionInput` | Extra extensions per side. |
| `originalReadonly` | `boolean` | Makes only the original side read-only. Default `false`. |
| `orientation` | `Orientation` | Which document is shown first: `'a-b'` (default) or `'b-a'`. |
| `revertControls` | `RevertControls` | Revert buttons between changed chunks: `'a-to-b'` or `'b-to-a'`. |
| `renderRevertControl` | `RenderRevertControl` | Renders the revert buttons. |
| `highlightChanges` | `boolean` | Highlights changed text. Default `true`. |
| `gutter` | `boolean` | Gutter markers next to changed lines. Default `true`. |
| `collapseUnchanged` | `CollapseUnchanged` | Collapses unchanged text. |
| `diffConfig` | `DiffConfig` | Options of the diff algorithm (from `@codemirror/merge`). |
| `(valueChange)` | `DiffEditorModel` | A user edit on either side, or `setValue()`. |
| `(originalValueChange)` / `(modifiedValueChange)` | `string` | A user edit on one side. |
| `(originalFocused)` / `(originalBlurred)` | `void` | Focus of the original side. |
| `(modifiedFocused)` / `(modifiedBlurred)` | `void` | Focus of the modified side. |
| `(ready)` | `MergeView` | Emitted once, right after the merge view is created. |

## Signals and methods

| Member | Signature | Description |
|--------|-----------|-------------|
| `mergeView` | `Signal<MergeView \| undefined>` | The merge view; editor `a` is original, `b` is modified. |
| `focus()` | `(): void` | Focuses the modified side. |
| `getValue()` | `(): DiffEditorModel` | Both current documents. |
| `setValue()` | `(value: DiffEditorModel): void` | Replaces both documents and emits `valueChange` once (not the one-sided outputs). |
| `goToNextChunk()` | `(): boolean` | Moves the modified side's selection to the next chunk. |
| `goToPreviousChunk()` | `(): boolean` | Moves it to the previous chunk. |
| `getChunks()` | `(): readonly Chunk[]` | The changed chunks; empty before the merge view exists. |
