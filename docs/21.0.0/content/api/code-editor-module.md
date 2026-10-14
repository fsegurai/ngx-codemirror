---
label: CodeEditorModule
description: The NgModule that imports and exports both editor components.
order: 3
tags: [ "api", "ngmodule" ]
keywords: [ "CodeEditorModule", "non-standalone", "declarations" ]
---

# CodeEditorModule

```typescript
@NgModule({
  imports: [CodeEditorComponent, CodeDiffEditorComponent],
  exports: [CodeEditorComponent, CodeDiffEditorComponent],
})
export class CodeEditorModule {}
```

It has no providers. Use it only in NgModule-based code; standalone components import the components directly. See
[Setup Styles](../getting-started/setup-styles.md).
