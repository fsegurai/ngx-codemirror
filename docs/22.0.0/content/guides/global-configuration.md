---
label: Global Configuration
description: Layer provideCodeEditor() defaults across application, route and component injectors.
order: 1
tags: [ "guides", "configuration" ]
keywords: [ "nested providers", "injector", "precedence", "CODE_EDITOR_CONFIG" ]
---

# Global Configuration

Set defaults once at the application level, then override them where needed.

## Quick path

1. Add `provideCodeEditor()` to the application providers.
2. Add another `provideCodeEditor()` to a route's or component's `providers` to override part of it.
3. Use instance inputs for one-off changes.

```typescript
// app.config.ts
provideCodeEditor({ theme: 'auto', languages, tabSize: 2 });

// routes.ts
{
  path: 'review',
  providers: [provideCodeEditor({ setup: 'minimal', lineNumbers: true })],
  loadComponent: () => import('./review.component').then((m) => m.ReviewComponent),
}
```

Editors under `review` get `theme: 'auto'`, `languages` and `tabSize: 2` from the app, and `setup: 'minimal'` with
line numbers from the route.

## How nested calls merge

| Part | Merge rule |
|------|------------|
| Options | By key; `undefined` never overrides |
| Themes (`withThemes`) | By name; a later one wins |
| Presets (`withExtensionPresets`) | By name; a later one wins |
| Global extensions (`withExtensions`) | Appended to the parent's |
| `light` / `dark` of `withThemes` | The latest given wins |
| Extensions `mode` | The latest given wins |

Call `provideCodeEditor()` once per injector. Without any provider, `CODE_EDITOR_CONFIG` resolves to `{}` and the
built-in defaults apply.
