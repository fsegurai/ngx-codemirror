---
label: App-wide Setup
description: Configure lazy themes, presets and an app light/dark toggle once for the whole application.
order: 3
tags: [ "examples", "configuration" ]
keywords: [ "provideCodeEditor", "withThemes", "presets", "CodeEditorThemeService" ]
---

# App-wide Setup

This mirrors the setup of the demo application.

```typescript
// app.config.ts
import { type ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { Prec, type Extension } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { cursorLineBoundaryBackward, cursorLineBoundaryForward } from '@codemirror/commands';
import { type LazyExtension, provideCodeEditor, withExtensionPresets, withThemes } from '@fsegurai/ngx-codemirror';

const emacsKeys: Extension = Prec.high(
  keymap.of([
    { key: 'Ctrl-a', run: cursorLineBoundaryBackward },
    { key: 'Ctrl-e', run: cursorLineBoundaryForward },
  ]),
);

const trailingWhitespace: LazyExtension = () =>
  import('@codemirror/view').then((m) => m.highlightTrailingWhitespace());

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideCodeEditor(
      { theme: 'auto' },
      withThemes(
        {
          nord: () => import('@fsegurai/codemirror-theme-bundle').then((m) => m.nord),
        },
        { light: 'light', dark: 'nord' },
      ),
      withExtensionPresets({ 'emacs-keys': emacsKeys, 'trailing-whitespace': trailingWhitespace }),
    ),
  ],
};
```

```html
<!-- Any template -->
<ngx-code-editor [(value)]="code" [presets]="['emacs-keys', 'trailing-whitespace']" />
```

```typescript
// The app's light/dark toggle
inject(CodeEditorThemeService).set(isDark ? 'nord' : 'light');
```

`@fsegurai/codemirror-theme-bundle` is an optional, separate package; any CodeMirror theme `Extension` works.
