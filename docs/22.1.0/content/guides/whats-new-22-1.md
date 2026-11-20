---
label: What's New in 22.1
description: Release notes of @fsegurai/ngx-codemirror 22.1.0, accessibility inputs, color scheme, theme pairs and the run key.
order: 6
tags: [ "guides", "release-notes" ]
keywords: [ "22.1.0", "release notes", "ariaLabel", "colorScheme", "high-contrast", "ThemePair", "runKey" ]
---

# What's New in 22.1

`22.1.0` is a minor release for Angular `^22`: every addition is optional and nothing breaks. Upgrade with:

```bash
npm install @fsegurai/ngx-codemirror@^22.1.0
```

## Accessibility inputs

`ariaLabel` and `ariaDescribedBy` set the content's `aria-label` / `aria-describedby`. While `indentWithTab` is on, a
visually hidden Tab focus hint ("Press Escape, then Tab, to move focus out of the editor.") is linked by
`aria-describedby`; `tabFocusHint` (input and provider option) localizes it or turns it off.
See [Accessibility](../features/accessibility.md).

```html
<ngx-code-editor ariaLabel="SQL query" indentWithTab tabFocusHint="Pulse Escape y luego Tab para salir." />
```

## `colorScheme` provider option

`'auto'` (and theme pairs) can follow the app's theme instead of `prefers-color-scheme`: a function (signals tracked,
`inject()` allowed), a CSS selector matched on `<html>` / `<body>`, or `{ dark?, highContrast? }` selectors. There is
a new `'high-contrast'` scheme and `withThemes(…, { highContrast })`.
See [Themes](../features/themes.md#color-scheme).

```typescript
provideCodeEditor(
  { theme: 'auto', colorScheme: { dark: '.dark-theme', highContrast: '.hc-theme' } },
  withThemes({ nord, 'hc-dark': hcDark }, { light: 'light', dark: 'nord', highContrast: 'hc-dark' }),
);
```

## Theme pairs

`theme` accepts `{ light, dark, highContrast? }` (names or extensions), resolved by the color scheme.

```html
<ngx-code-editor [theme]="{ light: 'github-light', dark: 'github-dark' }" />
```

## `runKey` input and `run` output

Bound with the highest precedence, so it wins over CodeMirror's default `Mod-Enter`.
See [Linting and Key Bindings](linting-and-keymaps.md#add-a-run-shortcut).

```html
<ngx-code-editor runKey="Mod-Enter" (run)="execute()" />
```

## Dependencies

Angular, CDK and Material `22.3.0`, `@codemirror/view` `6.43.15`, `@codemirror/autocomplete` `6.20.4`,
`@codemirror/lint` `6.9.8`, `@codemirror/merge` `6.12.3`, `@fsegurai/codemirror-theme-bundle` `6.6.0`. The peer
ranges are unchanged. The full list is in the
[CHANGELOG](https://github.com/fsegurai/ngx-codemirror/blob/main/CHANGELOG.md).
