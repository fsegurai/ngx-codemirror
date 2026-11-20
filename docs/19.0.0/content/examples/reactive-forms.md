---
label: Reactive Forms Editor
description: A JSON editor bound to a reactive FormControl with a required validator.
order: 1
tags: [ "examples", "forms" ]
keywords: [ "FormControl", "ReactiveFormsModule", "JSON" ]
---

# Reactive Forms Editor

```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { languages } from '@codemirror/language-data';
import { CodeEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-json-editor',
  imports: [CodeEditorComponent, ReactiveFormsModule],
  template: `
    <ngx-code-editor
      style="height: 260px"
      [formControl]="json"
      language="json"
      [languages]="languages"
      [indentUnit]="2"
      [indentWithTab]="true" />
    <p>Valid: {{ json.valid }} - Touched: {{ json.touched }}</p>
    <button type="button" (click)="json.disable()">Disable</button>
  `,
})
export class JsonEditorComponent {
  protected readonly languages = languages;
  protected readonly json = new FormControl('{\n  "name": "demo"\n}', { nonNullable: true, validators: Validators.required });
}
```

`json.disable()` calls `setDisabledState(true)`, which makes the editor non-editable.
