---
label: Diff Editor
description: The ngx-code-diff-editor component, a side-by-side CodeMirror MergeView.
order: 2
tags: [ "features", "diff" ]
keywords: [ "CodeDiffEditorComponent", "MergeView", "side by side" ]
---

# Diff Editor

`CodeDiffEditorComponent` renders a side-by-side [`MergeView`](https://codemirror.net/docs/ref/#merge.MergeView).
Editor `a` holds the original document, editor `b` the modified one.

```html
<ngx-code-diff-editor [(value)]="diff" language="typescript" [languages]="languages" />
```

```typescript
protected readonly diff = signal<DiffEditorModel>({ original: 'let a = 1;', modified: 'const a = 1;' });
```

Selectors: `ngx-code-diff-editor`, `code-diff-editor` and the attribute `[diff-editor]`.

## Two ways to bind documents

| Binding | Use it when |
|---------|-------------|
| `[(value)]` (or a form) with `{ original, modified }` | Both sides belong to one form value. |
| `[(originalValue)]` / `[(modifiedValue)]` | Each side lives in its own property. |

The latest of these and `value` wins. A `null`/`undefined` `value` (a form reset) shows two empty documents.

## Diff-specific options

- `orientation`: `'a-b'` (default) or `'b-a'`.
- `revertControls`: `'a-to-b'` or `'b-to-a'`, with `renderRevertControl` to render the buttons.
- `highlightChanges` and `gutter`: both default to `true`.
- `collapseUnchanged`: `{ margin?, minSize? }` collapses long unchanged stretches.
- `originalReadonly`: makes only the original side read-only.
- `originalExtensions` / `modifiedExtensions`: extra extensions per side.
- `diffConfig`: options of the diff algorithm.

## Navigation

`goToNextChunk()` / `goToPreviousChunk()` move the modified side's selection and return whether there was a chunk.
`getChunks()` returns the changed chunks (empty before the merge view exists). `focus()` focuses the modified side.

See [CodeDiffEditorComponent API](../api/code-diff-editor-component.md).
