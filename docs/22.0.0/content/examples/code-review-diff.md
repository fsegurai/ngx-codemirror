---
label: Code Review Diff
description: Compare two versions side by side or unified, and step through the changed chunks.
order: 2
tags: [ "examples", "diff" ]
keywords: [ "CodeDiffEditorComponent", "CodeUnifiedDiffEditorComponent", "goToNextChunk" ]
---

# Code Review Diff

## Side by side

```typescript
import { Component, signal, viewChild } from '@angular/core';
import { languages } from '@codemirror/language-data';
import { CodeDiffEditorComponent, type DiffEditorModel } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-review',
  imports: [CodeDiffEditorComponent],
  template: `
    <button type="button" (click)="editor().goToPreviousChunk()">Previous</button>
    <button type="button" (click)="editor().goToNextChunk()">Next</button>
    <ngx-code-diff-editor
      [(value)]="diff"
      language="typescript"
      [languages]="languages"
      originalReadonly
      revertControls="a-to-b"
      [collapseUnchanged]="{ margin: 3, minSize: 4 }" />
  `,
})
export class ReviewComponent {
  protected readonly languages = languages;
  protected readonly editor = viewChild.required(CodeDiffEditorComponent);
  protected readonly diff = signal<DiffEditorModel>({
    original: 'function add(a, b) {\n  return a + b;\n}',
    modified: 'export function add(a: number, b: number): number {\n  return a + b;\n}',
  });
}
```

## Unified

```typescript
import { Component, signal } from '@angular/core';
import { languages } from '@codemirror/language-data';
import { CodeUnifiedDiffEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-unified-review',
  imports: [CodeUnifiedDiffEditorComponent],
  template: `
    <ngx-code-unified-diff-editor
      [(original)]="original"
      [(value)]="modified"
      language="typescript"
      [languages]="languages"
      [allowInlineDiffs]="true" />
  `,
})
export class UnifiedReviewComponent {
  protected readonly languages = languages;
  protected readonly original = signal('const total = items.length;');
  protected readonly modified = signal('const total = items.filter(Boolean).length;');
}
```

Accepting a chunk updates `original`; rejecting one updates `modified`.
