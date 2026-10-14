---
label: SSR and Zoneless
description: How the editors behave with zoneless change detection and server-side rendering.
order: 9
tags: [ "features", "ssr" ]
keywords: [ "zoneless", "afterNextRender", "server-side rendering" ]
---

# SSR and Zoneless

The components are zoneless (`provideZonelessChangeDetection()`) and use `OnPush` change detection. Zone.js is not
required.

## View lifecycle

Views are created after the first render (`afterNextRender`), so:

- `view()` / `mergeView()` are `undefined` on the server and before `ready` emits.
- `ready` emits once, with the `EditorView` (or `MergeView`), right after creation.
- After the component is destroyed, `view()` / `mergeView()` go back to `undefined`.

## Reading values early

`getValue()` works before the view exists: it returns the value the editor will start with. A value set before the
view exists becomes the initial document.
