---
label: Errors
description: CodeEditorError, its members and the exported error code constants.
order: 7
tags: [ "api", "errors" ]
keywords: [ "CodeEditorError", "ERROR_LANGUAGE_NOT_FOUND", "discriminated union" ]
---

# Errors

`CodeEditorError` is a union discriminated by `code`. Every member has `code` and `message` (prefixed with
`ERROR_PREFIX`, `'[ngx-codemirror]'`).

| Type | `code` constant | Extra fields |
|------|-----------------|--------------|
| `LanguageNotFoundError` | `ERROR_LANGUAGE_NOT_FOUND` (`'language-not-found'`) | `language`, `available` |
| `LanguageLoadFailedError` | `ERROR_LANGUAGE_LOAD_FAILED` (`'language-load-failed'`) | `language`, `cause` |
| `InvalidThemeError` | `ERROR_INVALID_THEME` (`'invalid-theme'`) | `theme`, `available` |
| `ThemeLoadFailedError` | `ERROR_THEME_LOAD_FAILED` (`'theme-load-failed'`) | `theme`, `cause` |
| `ExtensionLoadFailedError` | `ERROR_EXTENSION_LOAD_FAILED` (`'extension-load-failed'`) | `source` (`'extensions' \| 'global' \| 'presets'`), `cause` |
| `UnknownPresetError` | `ERROR_UNKNOWN_PRESET` (`'unknown-preset'`) | `preset`, `available` |
| `InvalidIndentUnitError` | `ERROR_INVALID_INDENT_UNIT` (`'invalid-indent-unit'`) | `value` |

## Narrowing

```typescript
import { type CodeEditorError, ERROR_INVALID_THEME, ERROR_UNKNOWN_PRESET } from '@fsegurai/ngx-codemirror';

onError(error: CodeEditorError): void {
  switch (error.code) {
    case ERROR_INVALID_THEME:
      console.warn(`Unknown theme ${error.theme}; use one of`, error.available);
      break;
    case ERROR_UNKNOWN_PRESET:
      console.warn(`Unknown preset ${error.preset}`);
      break;
  }
}
```
