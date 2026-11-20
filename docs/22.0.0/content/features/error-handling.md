---
label: Error Handling
description: The typed error output that replaces thrown exceptions and console errors.
order: 8
tags: [ "features", "errors" ]
keywords: [ "CodeEditorError", "error output", "ERROR_PREFIX" ]
---

# Error Handling

Every component emits `error` with a `CodeEditorError` (discriminated by `code`) instead of throwing, and keeps its
current state. In development mode the error is also logged as a warning prefixed with `[ngx-codemirror]`.

| `code` | Constant | Emitted when |
|--------|----------|--------------|
| `language-not-found` | `ERROR_LANGUAGE_NOT_FOUND` | `language` is not in `languages` (`available` lists the names) |
| `language-load-failed` | `ERROR_LANGUAGE_LOAD_FAILED` | Loading the language failed (`cause`) |
| `invalid-theme` | `ERROR_INVALID_THEME` | Unknown theme name (`available`) |
| `theme-load-failed` | `ERROR_THEME_LOAD_FAILED` | Loading a lazy theme failed (`cause`) |
| `extension-load-failed` | `ERROR_EXTENSION_LOAD_FAILED` | Loading a lazy extension failed (`source`, `cause`) |
| `unknown-preset` | `ERROR_UNKNOWN_PRESET` | Unknown preset name (`available`); the other presets still apply |
| `invalid-indent-unit` | `ERROR_INVALID_INDENT_UNIT` | Invalid `indentUnit` (`value`); the default is used |

```html
<ngx-code-editor [(value)]="code" language="typescript" [languages]="languages" (error)="onError($event)" />
```

```typescript
onError(error: CodeEditorError): void {
  if (error.code === ERROR_LANGUAGE_NOT_FOUND) console.warn(error.message, error.available);
}
```

Every error type is listed in [Errors API](../api/errors.md).
