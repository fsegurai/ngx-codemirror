---
label: FAQ
description: Frequently asked questions about @fsegurai/ngx-codemirror 19.1.0.
order: 2
tags: [ "help", "faq" ]
keywords: [ "questions", "zone.js", "NgModule", "unified diff" ]
---

# FAQ

**Do I need Zone.js?**
`zone.js` `~0.15.0` is a peer dependency of 19.1.0.

**Is there an NgModule?**
Yes. `CodeEditorModule` exports both components. It has no `forRoot()`, although the README shows one.

**Can I access the `EditorView`?**
Yes. `ngx-code-editor` has a public `view` field and `ngx-code-diff-editor` a public `mergeView` field. `view`
became private in 19.2.0, so an extension such as `EditorView.updateListener.of(...)` is the durable option.

**Is there global configuration or a theme service?**
No. Every editor is configured through its own inputs in this release.

**Can I use any CodeMirror theme?**
Yes. Pass the theme `Extension` to `theme`. Named theme strings are not supported.

**Is there a unified (one-column) diff?**
Not as a component. Add `unifiedMergeView()` to `ngx-code-editor`; see [Unified Diff](../guides/unified-diff.md).

**Which Angular version do I need?**
19.x of this library targets Angular `^19`. Later Angular majors use the matching library major.
