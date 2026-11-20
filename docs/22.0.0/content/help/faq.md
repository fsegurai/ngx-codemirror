---
label: FAQ
description: Frequently asked questions about @fsegurai/ngx-codemirror.
order: 1
tags: [ "help", "faq" ]
keywords: [ "questions", "zone.js", "NgModule" ]
---

# FAQ

**Do I need Zone.js?**
No. The components are zoneless and use `OnPush` change detection.

**Is there an NgModule?**
No. `CodeEditorModule` was removed in 22.0.0. Import the standalone components directly.

**Why is `view()` `undefined`?**
The view is created after the first render, so it is `undefined` on the server and before `ready` emits. Use the
`ready` output, or read `view()` inside an `effect()`.

**Why does `valueChange` not fire when I set the value from the parent?**
By design: only user edits and `setValue()` emit, so writes from the parent or a form never echo back.

**Why does my language not highlight?**
`language` is looked up in `languages`. Pass `[languages]="languages"` (for example from `@codemirror/language-data`)
or set `languages` in `provideCodeEditor()`.

**Can I use any CodeMirror theme?**
Yes. Pass the theme `Extension` to `theme`, or register it by name with `withThemes()`.

**Does the diff editor support forms?**
Yes. Its value is a `DiffEditorModel` (`{ original, modified }`) and works with every forms API.

**Which Angular version do I need?**
22.x of this library targets Angular `^22`. Use 21.x, 20.x or 19.x of the library for older Angular majors.
