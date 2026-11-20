---
label: Setup Styles
description: Use the standalone components directly or import CodeEditorModule in an NgModule application.
order: 3
tags: [ "getting-started", "setup" ]
keywords: [ "standalone", "NgModule", "CodeEditorModule" ]
---

# Setup Styles

20.0.0 has no providers or global configuration. You only import components.

| Style | Import | Use when |
|-------|--------|----------|
| Standalone | `CodeEditorComponent`, `CodeDiffEditorComponent` | Standalone components (the Angular default). |
| NgModule | `CodeEditorModule` | Your feature is declared in an `NgModule`. |

## Standalone

```typescript
import { Component } from '@angular/core';
import { CodeDiffEditorComponent, CodeEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-editors',
  imports: [CodeEditorComponent, CodeDiffEditorComponent],
  templateUrl: './editors.component.html',
})
export class EditorsComponent {}
```

## NgModule

`CodeEditorModule` imports and re-exports both standalone components.

```typescript
import { NgModule } from '@angular/core';
import { CodeEditorModule } from '@fsegurai/ngx-codemirror';

@NgModule({
  imports: [CodeEditorModule],
  declarations: [EditorsComponent],
})
export class EditorsModule {}
```

The README of this release calls the module `CodemirrorModule`; the exported class is `CodeEditorModule`.

## Zone.js

20.0.0 lists `zone.js` (`~0.15.1`) as a peer dependency, and the 20.0.0 demo uses the default zone-based change
detection. The components use `OnPush` and signal inputs. Zone.js was dropped as a peer in 21.0.0.
