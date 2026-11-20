---
label: Playground Editor
description: A configurable editor modeled on the 19.1.0 demo playground.
order: 3
tags: [ "examples", "editor" ]
keywords: [ "playground", "signals", "ngModel", "theme bundle" ]
---

# Playground Editor

The 19.1.0 demo binds every option to one editor. It used plain component fields; this version uses signals,
which work the same way.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { languages } from '@codemirror/language-data';
import { type Setup, type Theme, CodeEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-playground',
  imports: [CodeEditorComponent, FormsModule],
  template: `
    <ngx-code-editor
      style="height: 400px"
      [(ngModel)]="content"
      [theme]="theme()"
      [language]="language()"
      [languages]="languages"
      [setup]="setup()"
      [disabled]="isDisabled()"
      [readonly]="isReadOnly()"
      [placeholder]="placeholder()"
      [indentWithTab]="isTabIndent()"
      [indentUnit]="indentUnit()"
      [lineWrapping]="isLineWrapping()"
      [highlightWhitespace]="isHighlightWhitespace()" />
  `,
})
export class PlaygroundComponent {
  protected readonly languages = languages;
  protected readonly content = signal('');
  protected readonly theme = signal<Theme>('light');
  protected readonly language = signal('JavaScript');
  protected readonly setup = signal<Setup>('basic');
  protected readonly isDisabled = signal(false);
  protected readonly isReadOnly = signal(false);
  protected readonly placeholder = signal('Type your code here...');
  protected readonly isTabIndent = signal(false);
  protected readonly indentUnit = signal(2);
  protected readonly isLineWrapping = signal(true);
  protected readonly isHighlightWhitespace = signal(false);
}
```

Try it live in the [demo](https://fsegurai.github.io/ngx-codemirror).
