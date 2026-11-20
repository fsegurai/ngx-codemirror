---
label: FAQ
description: Frequently asked questions about @fsegurai/ngx-codemirror 21.0.0.
order: 2
tags: [ "help", "faq" ]
keywords: [ "questions", "zone.js", "NgModule", "unified diff" ]
---

# FAQ

**Do I need Zone.js?**
No. Since 21.0.0 `zone.js` is not a peer dependency and the components work with
`provideZonelessChangeDetection()`.

**Is there an NgModule?**
Yes. `CodeEditorModule` exports both components. Standalone apps import the components directly.

**Can I access the `EditorView`?**
Not from the component; it is private. Use an extension such as `EditorView.updateListener.of(...)` or a
`ViewPlugin` to reach the view.

**Is there global configuration or a theme service?**
No. Every editor is configured through its own inputs in this release.

**Can I use any CodeMirror theme?**
Yes. Pass the theme `Extension` to `theme`. Named theme strings are not supported.

**Is there a unified (one-column) diff?**
Not as a component. Add `unifiedMergeView()` to `ngx-code-editor`; see [Unified Diff](../guides/unified-diff.md).

**Which Angular version do I need?**
21.x of this library targets Angular `^21`. Use 20.x or 19.x of the library for older Angular majors.
