---
label: Installation
description: Install @fsegurai/ngx-codemirror 19.1.0 and check its Angular peer dependencies.
order: 1
tags: [ "getting-started", "installation" ]
keywords: [ "npm", "bun", "peer dependencies", "language-data" ]
---

# Installation

```bash
npm install @fsegurai/ngx-codemirror@19.1.0
```

CodeMirror is a regular dependency of the library, so it is installed for you:

| Dependency | Range |
|------------|-------|
| `codemirror` | `^6.0.1` |
| `@codemirror/merge` | `^6.7.4` |
| `@codemirror/language-data` | `^6.5.1` |
| `tslib` | `^2.8.1` |

If your code imports from these packages directly (for example `languages` from `@codemirror/language-data`), add
them to your own `package.json` too, so your imports do not rely on hoisting:

```bash
npm install @codemirror/language-data @codemirror/merge
```

## Peer dependencies

| Package | Range |
|---------|-------|
| `@angular/common` | `^19.0.0` |
| `@angular/core` | `^19.0.0` |
| `@angular/forms` | `^19.0.0` |
| `@angular/platform-browser` | `^19.0.0` |
| `rxjs` | `^6.5.3 \|\| ^7.4.0 \|\| ^7.8.1` |
| `zone.js` | `~0.15.0` |

`@angular/forms` is a peer because both components register `NG_VALUE_ACCESSOR`.

## Compatibility

| Angular | @fsegurai/ngx-codemirror |
|---------|--------------------------|
| 19.x | 19.x |

## Next step

Render your first editor: [Quick Start](quick-start.md).
