---
label: Forms Integration
description: Use ngx-code-editor and ngx-code-diff-editor with ngModel and reactive forms.
order: 6
tags: [ "features", "forms" ]
keywords: [ "ControlValueAccessor", "ngModel", "FormControl", "DiffEditorModel" ]
---

# Forms Integration

Both components register `NG_VALUE_ACCESSOR`.

| Component | Form value | Touched when |
|-----------|-----------|--------------|
| `ngx-code-editor` | `string` | the editor gains or loses focus |
| `ngx-code-diff-editor` | `DiffEditorModel` (`{ original, modified }`) | either side gains or loses focus |

```html
<ngx-code-editor [formControl]="code" />
<ngx-code-diff-editor [(ngModel)]="diff" />
```

- `setDisabledState()` updates the `disabled` model and makes the editor non-editable.
- The diff editor ignores `null` and non-object values in `writeValue()`.
- This release has no dedicated Signal Forms support; use `ngModel` or reactive forms.
