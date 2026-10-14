---
label: Theme Switching
description: Switch the theme of every editor at once with CodeEditorThemeService.
order: 2
tags: [ "guides", "themes" ]
keywords: [ "CodeEditorThemeService", "light dark toggle", "auto" ]
---

# Theme Switching

`CodeEditorThemeService` holds an application-wide theme. Every editor without its own `theme` input follows it.

## Quick path

1. Register the themes you need with `withThemes()`.
2. Inject `CodeEditorThemeService` where your app toggle lives.
3. Call `set()` with a theme name; `undefined` goes back to the provider's theme.

```typescript
import { Component, inject } from '@angular/core';
import { CodeEditorThemeService } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-theme-toggle',
  template: `<button type="button" (click)="toggle()">Toggle editor theme</button>`,
})
export class ThemeToggleComponent {
  private readonly editorTheme = inject(CodeEditorThemeService);

  toggle(): void {
    this.editorTheme.set(this.editorTheme.theme() === 'dark' ? 'light' : 'dark');
  }
}
```

## Follow the operating system instead

Use `theme: 'auto'` in `provideCodeEditor()` and map it with `withThemes(themes, { light, dark })`. Editors then follow
`prefers-color-scheme`, until the service or an instance input sets another theme.

## Precedence

Instance `theme` input, then `CodeEditorThemeService`, then the provider `theme`, then `'light'`.
