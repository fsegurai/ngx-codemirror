---
label: Code Editor
description: The ngx-code-editor component, a single CodeMirror EditorView with signal inputs and form support.
order: 1
tags: [ "features", "editor" ]
keywords: [ "CodeEditorComponent", "ngx-code-editor", "EditorView" ]
---

# Code Editor

`CodeEditorComponent` renders one CodeMirror [`EditorView`](https://codemirror.net/docs/ref/#view.EditorView).

```html
<ngx-code-editor [(value)]="code" language="typescript" [languages]="languages" />
```

Selectors: `ngx-code-editor`, `code-editor` and the attribute `[code-editor]`.

## What it gives you

- `value` is a `model<string>`: two-way bindable and used by every forms API.
- `valueChange` emits on user edits and on `setValue()`, never on writes from the parent.
- `focused` / `blurred` / `touch` report focus; `ready` emits the `EditorView` once it exists.
- `extensions` adds extra extensions, eager or lazy.
- `root` sets the DOM root (`Document` or `ShadowRoot`), read at creation.
- `autoFocus` focuses the editor on creation.

## Programmatic access

```typescript
private readonly editor = viewChild.required(CodeEditorComponent);

format(): void {
  const code = this.editor().getValue();
  this.editor().setValue(prettify(code)); // emits valueChange once
  this.editor().focus();
}
```

`view()` is a signal holding the `EditorView`, or `undefined` before the first render and on the server.

See the full list in [CodeEditorComponent API](../api/code-editor-component.md).
