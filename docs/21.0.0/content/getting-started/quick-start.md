---
label: Quick Start
description: Import CodeEditorComponent, give it a height, and bind its value with ngModel or value plus change.
order: 2
tags: [ "getting-started", "quick-start" ]
keywords: [ "CodeEditorComponent", "ngModel", "first editor" ]
---

# Quick Start

Import the standalone component, pass the language list, and bind the value.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { languages } from '@codemirror/language-data';
import { CodeEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-root',
  imports: [CodeEditorComponent, FormsModule],
  template: `
    <ngx-code-editor
      style="height: 300px"
      [(ngModel)]="code"
      language="javascript"
      [languages]="languages"
      setup="basic"
      [lineWrapping]="true" />
  `,
})
export class AppComponent {
  protected readonly languages = languages;
  protected readonly code = signal('const answer = 42;');
}
```

## Pick a binding

| Binding | Import |
|---------|--------|
| `[(ngModel)]="code"` | `FormsModule` |
| `[formControl]="code"` / `formControlName` | `ReactiveFormsModule` |
| `[value]="code" (change)="code = $event"` | nothing |

`value` is a one-way input in 21.0.0; there is no `[(value)]` two-way binding on `ngx-code-editor`.

## Give it a height

The component sets `.cm-editor { height: 100% }` on its host (class `code-editor`, `display: block`). Size the host
element, or the editor grows with its content.

## Language lookup

`language` is matched by name or alias, case-insensitively, against `languages`. Without `languages`, the editor logs
`No supported languages. Please set the languages prop at first.` See [Languages](../features/languages.md).

## Next step

Choose standalone imports or the NgModule: [Setup Styles](setup-styles.md).
