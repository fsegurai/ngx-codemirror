---
label: Forms Integration
description: Use the editors with Signal Forms, reactive forms, ngModel or a plain two-way binding.
order: 4
tags: [ "features", "forms" ]
keywords: [ "FormValueControl", "formField", "formControlName", "ngModel" ]
---

# Forms Integration

The components implement Signal Forms `FormValueControl`. Angular 22's interop keeps the other forms APIs working.

| API | Template |
|-----|----------|
| Signal Forms | `<ngx-code-editor [formField]="f.code" />` |
| Reactive forms | `<ngx-code-editor [formControl]="code" />` or `formControlName="code"` |
| Template-driven | `<ngx-code-editor [(ngModel)]="code" />` |
| No forms | `<ngx-code-editor [(value)]="code" />` |

## Value types

| Component | Value |
|-----------|-------|
| `ngx-code-editor` | `string` |
| `ngx-code-unified-diff-editor` | `string` (the modified document) |
| `ngx-code-diff-editor` | `DiffEditorModel` (`{ original, modified }`) |

## Form state

- `disabled`: not editable and read-only.
- `readonly`: can be focused and selected, not changed by the user.
- `invalid` / `required`: set by the forms integration, reflected as `aria-invalid` / `aria-required`.
- `touched`: set by the forms integration; the `touch` output (on blur) marks the field touched.

## Emissions

Only user edits and `setValue()` emit `valueChange`. A value written by the parent or the form does not echo back.
The `ControlValueAccessor` methods (`writeValue`, `registerOnChange`…) no longer exist; set `value` or `disabled`.
