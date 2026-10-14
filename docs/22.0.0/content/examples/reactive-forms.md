---
label: Reactive Forms Editor
description: A JSON editor bound to a reactive FormControl, with validation state and error handling.
order: 1
tags: [ "examples", "forms" ]
keywords: [ "FormControl", "ReactiveFormsModule", "JSON" ]
---

# Reactive Forms Editor

```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { languages } from '@codemirror/language-data';
import { type CodeEditorError, CodeEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-json-editor',
  imports: [CodeEditorComponent, ReactiveFormsModule],
  template: `
    <ngx-code-editor
      [formControl]="config"
      language="json"
      [languages]="languages"
      [tabSize]="2"
      placeholder="Paste JSON here"
      (error)="onError($event)" />
    <button type="button" (click)="config.disable()">Lock</button>
  `,
})
export class JsonEditorComponent {
  protected readonly languages = languages;
  protected readonly config = new FormControl('{\n  "enabled": true\n}', {
    nonNullable: true,
    validators: [Validators.required],
  });

  protected onError(error: CodeEditorError): void {
    console.warn(error.message);
  }
}
```

## What to notice

- `config.disable()` sets the editor's `disabled` state: not editable and read-only.
- `required` and `invalid` reach the editor as `aria-required` / `aria-invalid`.
- Blurring the editor marks the control touched.
