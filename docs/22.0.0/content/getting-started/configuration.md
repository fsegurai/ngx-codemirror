---
label: Configuration
description: Set the default inputs, themes, extensions and presets of every editor with provideCodeEditor().
order: 3
tags: [ "getting-started", "configuration" ]
keywords: [ "provideCodeEditor", "withThemes", "withExtensions", "withExtensionPresets" ]
---

# Configuration

`provideCodeEditor(options, ...features)` sets the default inputs of every editor of an injector. Use it in the
application providers, a route's `providers` or a component's `providers`.

```typescript
import { ApplicationConfig } from '@angular/core';
import { languages } from '@codemirror/language-data';
import { provideCodeEditor, withExtensionPresets, withExtensions, withThemes } from '@fsegurai/ngx-codemirror';

export const appConfig: ApplicationConfig = {
  providers: [
    provideCodeEditor(
      { theme: 'auto', setup: 'basic', lineWrapping: true, languages },
      withThemes(
        { nord: () => import('@fsegurai/codemirror-theme-bundle').then((m) => m.nord) },
        { light: 'light', dark: 'nord' },
      ),
      withExtensions([myExtension]),
      withExtensionPresets({ vim: () => import('@replit/codemirror-vim').then((m) => m.vim()) }),
    ),
  ],
};
```

## Features

| Feature | What it does |
|---------|--------------|
| `withThemes(themes, { light?, dark? })` | Registers named themes, eager or lazy. `light` / `dark` are the themes `'auto'` uses. |
| `withExtensions(extensions, { mode? })` | Global extensions for every editor. |
| `withExtensionPresets(presets)` | Named extensions, enabled per editor with `[presets]="['vim']"`. |

## Precedence

Lowest first: built-in defaults, providers (a nested one over its parent), instance inputs. An `undefined` value
never overrides. Call `provideCodeEditor()` once per injector.

The options are those of the inputs (`theme`, `setup`, `placeholder`, `indentWithTab`, `indentUnit`, `lineWrapping`,
`highlightWhitespace`, `languages`, the [convenience inputs](../features/convenience-inputs.md) and `presets`), plus
global `extensions`.

## Next step

- Layered configuration per route or component: [Global Configuration](../guides/global-configuration.md).
- Full signatures: [Providers API](../api/providers.md).
