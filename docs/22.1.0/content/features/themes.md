---
label: Themes
description: Built-in, registered, lazy, auto and paired themes, the color scheme they follow, and how the theme of an editor is resolved.
order: 5
tags: [ "features", "themes" ]
keywords: [ "dark mode", "prefers-color-scheme", "withThemes", "darkTheme", "colorScheme", "high contrast", "ThemePair" ]
---

# Themes

The `theme` input (and the `theme` option of `provideCodeEditor()`) accepts:

| Value | Theme |
|-------|-------|
| `'light'` | CodeMirror's default look (the built-in default) |
| `'dark'` | A built-in dark base (exported as `darkTheme`) |
| `'auto'` | Follows the color scheme, using the `light` / `dark` / `highContrast` names of `withThemes()` (else the built-ins) |
| `{ light, dark, highContrast? }` | A theme pair (`ThemePair`; names or extensions) resolved by the same color scheme; `highContrast` falls back to `dark` |
| a registered name | A theme registered with `withThemes()`; a lazy theme loads on first use and is cached |
| an `Extension` | Any CodeMirror [theme](https://codemirror.net/examples/styling/#themes) |

A registered name wins over the built-in `'light'` / `'dark'`; `'auto'` is reserved.

```html
<ngx-code-editor [theme]="{ light: 'github-light', dark: 'github-dark', highContrast: 'hc-dark' }" />
```

## Color scheme

By default, `'auto'` and theme pairs follow the `prefers-color-scheme` media query. To follow your app's own theme
(for example a light / dark / system / high contrast switch), set `colorScheme` in `provideCodeEditor()`:

| `colorScheme` | Color scheme |
|---------------|--------------|
| `() => ColorSchemeName` | Whatever the function returns (`'light'`, `'dark'`, `'high-contrast'`). Signals it reads are tracked, and it runs in an injection context, so it may call `inject()`. |
| `'.dark-theme'` | `'dark'` while `<html>` or `<body>` matches the selector, else `'light'` |
| `{ dark?: '.dark', highContrast?: '.hc' }` | Selectors per scheme; `highContrast` wins when both match |

Selectors are re-checked when the attributes (such as `class`) of `<html>` or `<body>` change. For a
`'high-contrast'` scheme, `'auto'` uses the `highContrast` name of `withThemes(themes, { light, dark, highContrast })`
and a pair its `highContrast` theme; both fall back to the dark one.

```typescript
provideCodeEditor(
  { theme: 'auto', colorScheme: { dark: '.dark-theme', highContrast: '.hc-theme' } },
  withThemes(
    { 'github-light': githubLight, 'github-dark': githubDark },
    { light: 'github-light', dark: 'github-dark' },
  ),
);
```

## Resolution order

Highest first:

1. The instance `theme` input.
2. `CodeEditorThemeService` (the app-wide theme).
3. The `theme` of `provideCodeEditor()`.
4. `'light'`.

An unknown name emits `invalid-theme` and keeps the current theme. A failed lazy load emits `theme-load-failed`.

## Next step

Switch every editor from a light/dark toggle: [Theme Switching](../guides/theme-switching.md).
