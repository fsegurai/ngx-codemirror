---
label: Themes
description: Use the default light look or pass any CodeMirror theme Extension to the theme input.
order: 4
tags: [ "features", "themes" ]
keywords: [ "Theme", "Extension", "oneDark", "theme bundle" ]
---

# Themes

`theme` takes the `Theme` type: the string `'light'` or a CodeMirror `Extension`.

| Value | Result |
|-------|--------|
| `'light'` (default) | No theme extension; CodeMirror's default light styling. |
| An `Extension` | Applied through a compartment, so it can change at any time. |

```typescript
import { githubDark } from '@fsegurai/codemirror-theme-bundle';
```

```html
<ngx-code-editor [theme]="githubDark" />
<ngx-code-diff-editor [theme]="githubDark" />
```

There are no named themes in 21.0.0. A string other than `'light'` is not a valid `Theme`; the README example
`selectedTheme = 'forest'` only works in the demo, where `forest` is an imported theme extension.

The demo uses [`@fsegurai/codemirror-theme-bundle`](https://www.npmjs.com/package/@fsegurai/codemirror-theme-bundle)
`6.4.4`; any package that exports a CodeMirror 6 theme works. See [Theme Switching](../guides/theme-switching.md).
