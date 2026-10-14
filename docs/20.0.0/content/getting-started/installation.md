---
label: Installation
description: Install @fsegurai/ngx-codemirror 20.0.0 and check its Angular peer dependencies.
order: 1
tags: [ "getting-started", "installation" ]
keywords: [ "npm", "bun", "peer dependencies", "language-data" ]
---

# Installation

```bash
npm install @fsegurai/ngx-codemirror
```

CodeMirror is a regular dependency of the library, so it is installed for you:

| Dependency | Range |
|------------|-------|
| `codemirror` | `^6.0.2` |
| `@codemirror/merge` | `^6.10.2` |
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
| `@angular/common` | `^20.0.4` |
| `@angular/core` | `^20.0.4` |
| `@angular/platform-browser` | `^20.0.4` |
| `rxjs` | `^6.5.3 \|\| ^7.4.0 \|\| ^7.8.2` |
| `zone.js` | `~0.15.1` |

The components import `NG_VALUE_ACCESSOR` from `@angular/forms`, but `@angular/forms` is not a declared peer
dependency. Angular CLI applications already include it; add it if yours does not.

## Compatibility

| Angular | @fsegurai/ngx-codemirror |
|---------|--------------------------|
| 20.x | 20.x |
| 19.x | 19.x |

`@angular/forms` was a peer dependency in 19.x and was removed from the peer list in 20.0.0.

## Next step

Render your first editor: [Quick Start](quick-start.md).
