---
label: Quick Start
description: Import CodeEditorComponent and bind its value with Signal Forms, reactive forms, ngModel or a model.
order: 2
tags: [ "getting-started", "quick-start" ]
keywords: [ "CodeEditorComponent", "formField", "first editor" ]
---

# Quick Start

Import the standalone component and bind its value with the forms API you use.

```typescript
import { Component, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { languages } from '@codemirror/language-data';
import { CodeEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-root',
  imports: [CodeEditorComponent, FormField],
  template: `
    <ngx-code-editor
      [formField]="editorForm.code"
      language="javascript"
      [languages]="languages"
      theme="dark"
      [lineWrapping]="true" />
  `,
})
export class AppComponent {
  protected readonly languages = languages;
  protected readonly model = signal({ code: 'const answer = 42;' });
  protected readonly editorForm = form(this.model);
}
```

## Pick a binding

| Binding | Import |
|---------|--------|
| `<ngx-code-editor [formField]="f.code" />` | `FormField` from `@angular/forms/signals` |
| `<ngx-code-editor [formControl]="code" />` / `formControlName` | `ReactiveFormsModule` |
| `<ngx-code-editor [(ngModel)]="code" />` | `FormsModule` |
| `<ngx-code-editor [(value)]="code" />` | nothing (a plain `model()`) |

## Language lookup

`language` is looked up by name or alias (case-insensitive) in `languages`. Pass both, or set `languages` once in
[`provideCodeEditor()`](configuration.md). Without any `languages`, the editor emits a `language-not-found` error.

## Next step

Set defaults for every editor: [Configuration](configuration.md).
