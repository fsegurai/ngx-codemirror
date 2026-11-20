---
label: FAQ
description: Frequently asked questions about @fsegurai/ngx-codemirror 20.0.0.
order: 2
tags: [ "help", "faq" ]
keywords: [ "questions", "zone.js", "NgModule", "unified diff" ]
---

# FAQ

**Do I need Zone.js?**
`zone.js` `~0.15.1` is a peer dependency of 20.0.0. It was removed in 21.0.0.

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
20.x of this library targets Angular `^20`. Use 19.x of the library for Angular 19, and 21.x for Angular majors.
