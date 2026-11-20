---
label: Installation
description: Install @fsegurai/ngx-codemirror with its Angular and CodeMirror peer dependencies.
order: 1
tags: [ "getting-started", "installation" ]
keywords: [ "npm", "bun", "peer dependencies", "language-data" ]
---

# Installation

Install the library together with its CodeMirror peer dependencies:

```bash
npm install @fsegurai/ngx-codemirror codemirror @codemirror/autocomplete @codemirror/commands @codemirror/language @codemirror/lint @codemirror/merge @codemirror/search @codemirror/state @codemirror/view
```

For syntax highlighting, add the language descriptions you need. `@codemirror/language-data` provides all of them:

```bash
npm install @codemirror/language-data
```

## Peer dependencies

| Package | Range |
|---------|-------|
| `@angular/common` | `^22.0.0` |
| `@angular/core` | `^22.0.0` |
| `@angular/forms` | `^22.0.0` |
| `@codemirror/autocomplete` | `^6.20.3` |
| `@codemirror/commands` | `^6.11.1` |
| `@codemirror/language` | `^6.12.4` |
| `@codemirror/lint` | `^6.9.7` |
| `@codemirror/merge` | `^6.12.2` |
| `@codemirror/search` | `^6.7.2` |
| `@codemirror/state` | `^6.7.6` |
| `@codemirror/view` | `^6.43.13` |
| `codemirror` | `^6.0.2` |

The only runtime dependency is `tslib`. The package is marked `sideEffects: false`.

## Compatibility

| Angular | @fsegurai/ngx-codemirror |
|---------|--------------------------|
| 22.x | 22.x |
| 21.x | 21.x |
| 20.x | 20.x |
| 19.x | 19.x |

Since 21.x the library is zoneless and does not require Zone.js.

## Next step

Render your first editor: [Quick Start](quick-start.md).
