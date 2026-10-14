---
label: Code Review Diff
description: Compare two versions side by side with revert controls, collapsed context and a language extension.
order: 2
tags: [ "examples", "diff" ]
keywords: [ "CodeDiffEditorComponent", "revertControls", "collapseUnchanged" ]
---

# Code Review Diff

```typescript
import { Component } from '@angular/core';
import { javascript } from '@codemirror/lang-javascript';
import { CodeDiffEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-review',
  imports: [CodeDiffEditorComponent],
  template: `
    <ngx-code-diff-editor
      style="height: 420px"
      [originalValue]="original"
      (originalValueChange)="original = $event"
      [modifiedValue]="modified"
      (modifiedValueChange)="modified = $event"
      [originalExtensions]="lang"
      [modifiedExtensions]="lang"
      revertControls="a-to-b"
      [collapseUnchanged]="{ margin: 2 }" />
  `,
})
export class ReviewComponent {
  protected readonly lang = [javascript()];
  protected original = 'function add(a, b) {\n  return a + b;\n}';
  protected modified = 'function add(a, b) {\n  return a + b + 0;\n}';
}
```

`@codemirror/lang-javascript` is a separate package (`npm install @codemirror/lang-javascript`).
