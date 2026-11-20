---
label: Theme Switching
description: Switch the editor theme at runtime by binding a signal that holds a theme Extension.
order: 1
tags: [ "guides", "themes" ]
keywords: [ "signal", "Extension", "theme picker", "codemirror-theme-bundle" ]
---

# Theme Switching

Keep the selected theme in a signal and bind it to `theme`. The component swaps the theme compartment on change.

```typescript
import { Component, signal } from '@angular/core';
import { type Theme, CodeEditorComponent } from '@fsegurai/ngx-codemirror';
import { githubDark, githubLight } from '@fsegurai/codemirror-theme-bundle';

@Component({
  selector: 'app-themed-editor',
  imports: [CodeEditorComponent],
  template: `
    <button type="button" (click)="theme.set(githubLight)">Light</button>
    <button type="button" (click)="theme.set(githubDark)">Dark</button>
    <ngx-code-editor style="height: 240px" [theme]="theme()" value="// switch me" />
  `,
})
export class ThemedEditorComponent {
  protected readonly githubLight = githubLight;
  protected readonly githubDark = githubDark;
  protected readonly theme = signal<Theme>('light');
}
```

## Checklist

- [ ] Store the theme `Extension`, not its name.
- [ ] Use `'light'` to fall back to the default look.
- [ ] Bind the same signal to `ngx-code-diff-editor` to theme both sides.
