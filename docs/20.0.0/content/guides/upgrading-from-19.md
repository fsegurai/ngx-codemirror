---
label: Upgrading from 19.x
description: Move an application from @fsegurai/ngx-codemirror 19.x to 20.0.0.
order: 3
tags: [ "guides", "upgrade" ]
keywords: [ "Angular 20", "model", "mergeView", "breaking changes" ]
---

# Upgrading from 19.x

Selectors, input names, output names and the `CodeEditorModule` are unchanged from 19.2.0. The differences are the
Angular peers and a few signal migrations.

| Area | 19.2.0 | 20.0.0 |
|------|--------|--------|
| Angular peers | `^19.0.0` | `^20.0.4` |
| `@angular/forms` peer | `^19.0.0` | not a peer (still imported at runtime) |
| `disabled` (both components) | `@Input()` field | `model(false)`; `[(disabled)]` works |
| `originalValue` / `modifiedValue` | `@Input()` fields | `model('')`; two-way binding works |
| `CodeDiffEditorComponent.mergeView` | public field | private |
| Type declarations | in the component files | `configuration/editor-attributes.ts` |
| Type imports from `@fsegurai/ngx-codemirror` | work | work (unchanged) |

## Checklist

- [ ] Update the application to Angular 20 (`ng update @angular/core@20 @angular/cli@20`).
- [ ] Install `@fsegurai/ngx-codemirror@20`.
- [ ] Keep `@angular/forms` installed; the components still use `NG_VALUE_ACCESSOR`.
- [ ] Replace any `diffEditor.mergeView` access with an extension passed to `originalExtensions` or
  `modifiedExtensions`.
- [ ] Optional: use `[(originalValue)]`, `[(modifiedValue)]` or `[(disabled)]` instead of input plus output pairs.
