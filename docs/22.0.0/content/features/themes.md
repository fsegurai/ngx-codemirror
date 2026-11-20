---
label: Themes
description: Built-in, registered, lazy and auto themes, and how the theme of an editor is resolved.
order: 5
tags: [ "features", "themes" ]
keywords: [ "dark mode", "prefers-color-scheme", "withThemes", "darkTheme" ]
---

# Themes

The `theme` input (and the `theme` option of `provideCodeEditor()`) accepts:

| Value | Theme |
|-------|-------|
| `'light'` | CodeMirror's default look (the built-in default) |
| `'dark'` | A built-in dark base (exported as `darkTheme`) |
| `'auto'` | Follows `prefers-color-scheme`, using the `light` / `dark` names of `withThemes()` (else the built-ins) |
| a registered name | A theme registered with `withThemes()`; a lazy theme loads on first use and is cached |
| an `Extension` | Any CodeMirror [theme](https://codemirror.net/examples/styling/#themes) |

A registered name wins over the built-in `'light'` / `'dark'`; `'auto'` is reserved.

## Resolution order

Highest first:

1. The instance `theme` input.
2. `CodeEditorThemeService` (the app-wide theme).
3. The `theme` of `provideCodeEditor()`.
4. `'light'`.

An unknown name emits `invalid-theme` and keeps the current theme. A failed lazy load emits `theme-load-failed`.

## Next step

Switch every editor from a light/dark toggle: [Theme Switching](../guides/theme-switching.md).
