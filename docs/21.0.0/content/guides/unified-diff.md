---
label: Unified Diff
description: Render a one-column diff by adding unifiedMergeView from @codemirror/merge to ngx-code-editor.
order: 2
tags: [ "guides", "diff" ]
keywords: [ "unifiedMergeView", "@codemirror/merge", "one column diff" ]
---

# Unified Diff

21.0.0 has no unified diff component. The demo builds one by passing `unifiedMergeView` to `ngx-code-editor`.
`@codemirror/merge` is already a dependency of the library.

```typescript
import { Component } from '@angular/core';
import { unifiedMergeView } from '@codemirror/merge';
import { CodeEditorComponent } from '@fsegurai/ngx-codemirror';

const original = 'one\ntwo\nthree';

@Component({
  selector: 'app-unified-diff',
  imports: [CodeEditorComponent],
  template: `<ngx-code-editor style="height: 240px" [value]="modified" [extensions]="extensions" />`,
})
export class UnifiedDiffComponent {
  protected readonly modified = 'one\nTwo\nthree\nfour';
  protected readonly extensions = [unifiedMergeView({ original })];
}
```

## Notes

- `value` is the modified document; `original` is fixed inside the extension.
- To change `original`, pass a new extensions array. This reconfigures the editor (see
  [Extensions](../features/extensions.md)).
- A dedicated `ngx-code-unified-diff-editor` component arrived in 22.0.0.
