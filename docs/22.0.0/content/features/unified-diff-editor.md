---
label: Unified Diff Editor
description: The ngx-code-unified-diff-editor component, one editor showing changes inline with accept and reject buttons.
order: 3
tags: [ "features", "unified-diff" ]
keywords: [ "CodeUnifiedDiffEditorComponent", "unifiedMergeView", "accept", "reject" ]
---

# Unified Diff Editor

`CodeUnifiedDiffEditorComponent` is one editor built on CodeMirror's
[`unifiedMergeView`](https://codemirror.net/docs/ref/#merge.unifiedMergeView). It compares its `value` (the modified
document) with `original`.

```html
<ngx-code-unified-diff-editor [(original)]="original" [(value)]="modified" language="typescript" [languages]="languages" />
```

Selector: `ngx-code-unified-diff-editor`.

## How accept and reject work

| Action | Changes |
|--------|---------|
| Reject a chunk | `value` (the modified document) |
| Accept a chunk | `original`, two-way bindable as `[(original)]` |

## Options

- `mergeControls`: `true` (default), `false`, or a function `(type, action) => HTMLElement` rendering the buttons.
- `highlightChanges`, `gutter`, `syntaxHighlightDeletions`: default `true`.
- `allowInlineDiffs`: shows small changes inline. Default `false`.
- `collapseUnchanged` and `diffConfig`: as in the [diff editor](diff-editor.md).

It also takes every input and output of [`ngx-code-editor`](code-editor.md), including `value`, `extensions`,
`view()`, `ready`, `focus()`, `getValue()` and `setValue()`. Navigation uses `goToNextChunk()`,
`goToPreviousChunk()` and `getChunks()`.

See [CodeUnifiedDiffEditorComponent API](../api/code-unified-diff-editor-component.md).
