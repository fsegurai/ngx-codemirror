---
label: CodeUnifiedDiffEditorComponent
description: Inputs, outputs, signals and methods of ngx-code-unified-diff-editor.
order: 4
tags: [ "api", "unified-diff" ]
keywords: [ "ngx-code-unified-diff-editor", "mergeControls", "original" ]
---

# CodeUnifiedDiffEditorComponent

Selector: `ngx-code-unified-diff-editor`. Takes every input, output, signal and method of
[CodeEditorComponent](code-editor-component.md) (`value` is the modified document), plus:

| Input / output | Type | Description |
|----------------|------|-------------|
| `original` | `model<string>` | The document compared with. Accepting a chunk updates it (`[(original)]`). Default `''`. |
| `mergeControls` | `UnifiedMergeControls` | Accept/reject buttons: `true` (default), `false` or a render function. |
| `highlightChanges` | `boolean` | Highlights changed text. Default `true`. |
| `gutter` | `boolean` | Gutter markers next to changed lines. Default `true`. |
| `syntaxHighlightDeletions` | `boolean` | Syntax-highlights deleted lines. Default `true`. |
| `allowInlineDiffs` | `boolean` | Shows chunks with only inline changes inline. Default `false`. |
| `collapseUnchanged` | `CollapseUnchanged` | Collapses unchanged text. |
| `diffConfig` | `DiffConfig` | Options of the diff algorithm. |

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `goToNextChunk()` | `(): boolean` | Moves the selection to the next changed chunk. |
| `goToPreviousChunk()` | `(): boolean` | Moves it to the previous changed chunk. |
| `getChunks()` | `(): readonly Chunk[]` | The changed chunks; empty before the view exists. |
