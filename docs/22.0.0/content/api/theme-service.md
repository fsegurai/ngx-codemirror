---
label: CodeEditorThemeService
description: The root service holding the application-wide editor theme.
order: 6
tags: [ "api", "themes" ]
keywords: [ "CodeEditorThemeService", "set", "Signal" ]
---

# CodeEditorThemeService

`@Injectable({ providedIn: 'root' })`. Every editor without an instance `theme` input follows it, over the `theme`
of `provideCodeEditor()`.

| Member | Signature | Description |
|--------|-----------|-------------|
| `theme` | `Signal<Theme \| undefined>` | The app-wide theme; `undefined` (default) leaves the provider's theme in place. |
| `set()` | `(theme: Theme \| undefined): void` | Sets the app-wide theme; `undefined` goes back to the provider's theme. |

```typescript
inject(CodeEditorThemeService).set('nord');
```

Precedence, highest first: the instance `theme` input, this service, the `theme` of `provideCodeEditor()`, `'light'`.
