---
label: Extensions
description: Add CodeMirror extensions globally, per editor, lazily, or as named presets.
order: 6
tags: [ "features", "extensions" ]
keywords: [ "LazyExtension", "ExtensionInput", "presets", "withExtensions" ]
---

# Extensions

Extensions can be eager (`Extension`) or lazy (`() => Promise<Extension>`). A lazy extension is loaded once and
shared by every editor that uses the same loader function.

| Where | How | Notes |
|-------|-----|-------|
| Every editor | `withExtensions([...])` or `provideCodeEditor({ extensions })` | Nested providers append to their parent. |
| One editor | `[extensions]="[...]"` | Appended after the global extensions. |
| Replace globals | `withExtensions([...], { mode: 'replace' })` | An editor with its own `extensions` input uses only those. |
| Opt-in per editor | `withExtensionPresets({ name: ext })` + `[presets]="['name']"` | Unknown names emit `unknown-preset`. |

```typescript
withExtensions([
  EditorView.lineWrapping,
  () => import('@replit/codemirror-indentation-markers').then((m) => m.indentationMarkers()),
]);
```

## Rules

- Only items of the top-level array may be lazy; nested arrays are plain extensions.
- A failed lazy load emits `extension-load-failed` (with `source`: `'extensions'`, `'global'` or `'presets'`) and keeps
  the extensions already applied. The next use retries the load.
- The diff editor takes `originalExtensions` / `modifiedExtensions` instead of `extensions`.

## Next step

[Lazy Loading](../guides/lazy-loading.md) shows how to keep large extensions out of the initial bundle.
