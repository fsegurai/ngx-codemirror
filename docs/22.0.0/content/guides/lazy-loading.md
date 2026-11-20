---
label: Lazy Loading
description: Load themes, extensions, presets and languages on first use with dynamic imports.
order: 3
tags: [ "guides", "performance" ]
keywords: [ "LazyExtension", "dynamic import", "bundle size" ]
---

# Lazy Loading

Any theme, extension or preset can be a `LazyExtension`: a function returning a `Promise<Extension>`.

```typescript
provideCodeEditor(
  {},
  withThemes({ nord: () => import('@fsegurai/codemirror-theme-bundle').then((m) => m.nord) }),
  withExtensionPresets({ vim: () => import('@replit/codemirror-vim').then((m) => m.vim()) }),
);
```

## What happens on load

- The load starts when an editor first uses the item.
- The promise is cached per loader function: every editor using the same function shares one load.
- Once loaded, later editors apply it at once.
- A failed load emits `theme-load-failed` or `extension-load-failed`, keeps the current state, and is retried on the
  next use.

## Tip: keep loader functions stable

Caching is keyed by the function. Define loaders once (a constant or provider), not inline in a template expression,
so editors share the load.

## Languages

Languages load through CodeMirror's `LanguageDescription`, so `@codemirror/language-data` already loads each
language on demand. A failed load emits `language-load-failed`.
