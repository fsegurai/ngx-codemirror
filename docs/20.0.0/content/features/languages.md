---
label: Languages
description: How language and languages select and lazily load syntax highlighting in ngx-code-editor.
order: 3
tags: [ "features", "languages" ]
keywords: [ "LanguageDescription", "language-data", "alias", "syntax highlighting" ]
---

# Languages

Pass a list of `LanguageDescription` objects to `languages` and a name to `language`.

```typescript
import { languages } from '@codemirror/language-data';
```

```html
<ngx-code-editor [languages]="languages" language="python" />
```

## How the lookup works

1. `''` or `'Plain Text'` removes the language.
2. Otherwise the name is compared case-insensitively with each entry's `name` and `alias`.
3. The match is loaded with `LanguageDescription.load()` and applied when the promise resolves.

| Situation | Result |
|-----------|--------|
| `languages` is empty | `console.error('No supported languages. ...')`; nothing applied. |
| No entry matches | `console.error('Language not found:', name)` plus a list of supported names. |

Languages apply only to `ngx-code-editor`. For the diff editor, add a language extension through
`originalExtensions` and `modifiedExtensions`.

The doc comment marks `languages` as not changing dynamically. In this release the list is read whenever `language`
changes, so set `languages` before or together with `language`.
