---
label: Upgrading from 19.1
description: Move an application from @fsegurai/ngx-codemirror 19.1.x to 19.2.0.
order: 3
tags: [ "guides", "upgrade" ]
keywords: [ "19.1.0", "EditorView", "Plain Text", "minor release" ]
---

# Upgrading from 19.1

19.2.0 is a minor release. Selectors, inputs, outputs and `CodeEditorModule` are unchanged. One public field became
private, and clearing the language now works.

| Area | 19.1.0 | 19.2.0 |
|------|--------|--------|
| `CodeEditorComponent.view` | public `EditorView` field | private |
| `language` set to `''` | ignored; the previous language stays | removes the language |
| `language` set to `'Plain Text'` | looked up like any name (usually `Language not found`) | removes the language |
| `@codemirror/merge` dependency | `^6.7.4` | `^6.8.0` |
| `rxjs` peer | `... \|\| ^7.8.1` | `... \|\| ^7.8.2` |
| `CodeDiffEditorComponent.mergeView` | public | public (unchanged) |

## Checklist

- [ ] Install `@fsegurai/ngx-codemirror@19.2.0`.
- [ ] Replace any `editor.view` access with an extension, for example `EditorView.updateListener.of(...)` passed to
  `extensions`.
- [ ] If you relied on `language = ''` keeping the old highlighting, set the language you want explicitly.
