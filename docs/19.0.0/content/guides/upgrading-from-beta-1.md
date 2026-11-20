---
label: Upgrading from 19.0.0-beta.1
description: Move an application from the 19.0.0-beta.1 prerelease to @fsegurai/ngx-codemirror 19.0.0.
order: 3
tags: [ "guides", "upgrade" ]
keywords: [ "19.0.0-beta.1", "prerelease", "setValue", "theme input" ]
---

# Upgrading from 19.0.0-beta.1

Selectors, input names and output names carry over. The setter methods became private, and the diff editor gained a
`theme` input and live reconfiguration.

| Area | 19.0.0-beta.1 | 19.0.0 |
|------|---------------|--------|
| `CodeEditorComponent` setters (`setValue`, `setTheme`, `setLanguage`, `setExtensions` and the rest) | public methods | private |
| `CodeDiffEditorComponent.setValue(editor, value)` / `setEditable(editor, value)` | public methods | private |
| `view` / `mergeView` fields | public | public (unchanged) |
| Diff editor `theme` input | missing | `Theme`, default `'light'`, both sides |
| Diff editor `setup`, `originalExtensions`, `modifiedExtensions` changes | ignored after creation | reconfigure both editors |
| Diff editor without a form directive | default callbacks call each other; focusing or editing recurses | callbacks are no-ops until a form registers |
| Code editor without a form directive | each document change and focus refocuses the view | callbacks are no-ops until a form registers |

## Checklist

- [ ] Install `@fsegurai/ngx-codemirror@19.0.0`.
- [ ] Replace calls such as `editor.setValue(text)` with input bindings (`[value]`, `[theme]`, `[language]`).
- [ ] Replace theme extensions passed through `originalExtensions` / `modifiedExtensions` with the new `theme`
  input.
- [ ] Remove any workaround that wrapped the diff editor in a form directive only to avoid errors.
