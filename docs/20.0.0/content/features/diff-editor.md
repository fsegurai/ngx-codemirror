---
label: Diff Editor
description: The ngx-code-diff-editor component, a side-by-side CodeMirror MergeView with typed diff options.
order: 2
tags: [ "features", "diff" ]
keywords: [ "CodeDiffEditorComponent", "MergeView", "collapseUnchanged", "revertControls" ]
---

# Diff Editor

`CodeDiffEditorComponent` wraps a CodeMirror `MergeView`: editor A holds the original, editor B the modified text.
Selectors: `ngx-code-diff-editor`, `code-diff-editor`, `[diff-editor]`.

```html
<ngx-code-diff-editor
  style="height: 400px"
  [(originalValue)]="original"
  [(modifiedValue)]="modified"
  orientation="a-b"
  revertControls="a-to-b"
  [collapseUnchanged]="{ margin: 3, minSize: 4 }" />
```

## Inputs

| Input | Effect |
|-------|--------|
| `originalValue` / `modifiedValue` | Documents of editor A and B. Two-way (`model`). |
| `originalExtensions` / `modifiedExtensions` | Extensions for one side only. |
| `theme`, `setup`, `disabled` | Applied to both sides. `disabled` is two-way. |
| `orientation` | `'a-b'` (default) or `'b-a'`. |
| `revertControls` | `'a-to-b'` or `'b-to-a'` shows revert buttons between chunks. |
| `renderRevertControl` | `() => HTMLElement` renders a custom revert button. |
| `highlightChanges` | Marks inserted and deleted text. Default `true`. |
| `gutter` | Gutter markers next to changed lines. Default `true`. |
| `collapseUnchanged` | `{ margin?, minSize? }` collapses unchanged stretches. |
| `diffConfig` | `DiffConfig` passed to the diff algorithm. |

The `MergeView` options (`orientation` through `diffConfig`) are applied with `MergeView.reconfigure()` when they
change.

## Events

| Output | Emits |
|--------|-------|
| `originalValueChange` / `modifiedValueChange` | The new text of that side. |
| `originalFocus` / `originalBlur` | Focus changes of editor A. |
| `modifiedFocus` / `modifiedBlur` | Focus changes of editor B. |

There is no `readonly` or `placeholder` input on the diff editor. For a one-column diff, see
[Unified Diff](../guides/unified-diff.md).
