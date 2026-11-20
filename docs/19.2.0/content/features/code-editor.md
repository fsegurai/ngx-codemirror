---
label: Code Editor
description: The ngx-code-editor component, a single CodeMirror EditorView configured through its inputs.
order: 1
tags: [ "features", "editor" ]
keywords: [ "CodeEditorComponent", "ngx-code-editor", "EditorView" ]
---

# Code Editor

`CodeEditorComponent` wraps one CodeMirror `EditorView`. Selectors: `ngx-code-editor`, `code-editor`,
`[code-editor]`.

```html
<ngx-code-editor
  style="height: 320px"
  [value]="code"
  (change)="code = $event"
  language="typescript"
  [languages]="languages"
  placeholder="Type here..."
  [indentWithTab]="true"
  [indentUnit]="2" />
```

## What each input changes

| Input | Effect | Updates live |
|-------|--------|--------------|
| `value` | Replaces the whole document. | Yes |
| `disabled` | `EditorView.editable` off. `@Input()` field; one-way. | Yes |
| `readonly` | `EditorState.readOnly` on; the editor still takes focus. | Yes |
| `theme` | `'light'` (no theme) or a theme `Extension`. | Yes |
| `placeholder` | Text shown while empty. | Yes |
| `indentWithTab` | Binds Tab to `indentWithTab`. | Yes |
| `indentUnit` | Number of spaces per indent; `0` keeps the CodeMirror default. | Yes |
| `lineWrapping` | `EditorView.lineWrapping`. | Yes |
| `highlightWhitespace` | `highlightWhitespace()`. | Yes |
| `language` / `languages` | See [Languages](languages.md). | `language` yes |
| `setup` / `extensions` | See [Extensions](extensions.md). | Yes, by full reconfigure |
| `root` | `EditorView.root` (`Document` or `ShadowRoot`). | No |
| `autoFocus` | Focuses the editor after creation. | No |

## Events

| Output | Emits |
|--------|-------|
| `change` | The new document string after any document change not annotated with `External`. |
| `focus` / `blur` | When the content DOM gains or loses focus; both also mark a form control as touched. |

The component does not annotate its own writes, so setting `value` or writing through a form also emits `change`.

## Lifecycle

The view is created in `ngOnInit` and destroyed in `ngOnDestroy`. Since 19.2.0 the `EditorView` instance is private;
reach CodeMirror state through [extensions](extensions.md).
