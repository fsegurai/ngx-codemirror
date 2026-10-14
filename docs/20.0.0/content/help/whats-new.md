---
label: What's New in 20.0.0
description: Release notes for @fsegurai/ngx-codemirror 20.0.0 and what changes when upgrading from 19.x.
order: 1
tags: [ "help", "changelog", "release-notes" ]
keywords: [ "20.0.0", "breaking changes", "Angular 20", "signal inputs" ]
---

# What's New in 20.0.0

Released 2025-07-06. The library moves to Angular 20, finishes the migration to signal inputs, and exports its types
from one module.

## Breaking changes

| Area | 19.x | 20.0.0 |
|------|------|--------|
| Angular peers (`common`, `core`, `platform-browser`) | `^19.0.0` | `^20.0.4` |
| `@angular/forms` peer | `^19.0.0` | removed from peers |
| `zone.js` peer | `~0.15.0` | `~0.15.1` |

## Features

- **Typed inputs and outputs** - every input is an `InputSignal`, `InputSignalWithTransform` or `ModelSignal`, and
  every output an `OutputEmitterRef`.
- **Editor attributes** - `Theme`, `Setup`, `Orientation`, `RevertControls`, `RenderRevertControl` and
  `DiffEditorModel` live in `configuration/editor-attributes` and are exported from the package root.
- **Demo** - new render page, and improved editor and theme visualization in the playground.

## Fixes

- **Components** - importing the components in external projects works (the 19.x diff editor imported its types
  from the package name `ngx-codemirror` instead of a relative path).
- **Demo** - Material style duplication, performance, styles and Prism formatting.
- **Templates** - migrated to self-closing tags.

## Changes

- **Signals** - `disabled`, `originalValue` and `modifiedValue` moved from `@Input()` to `model()`.
- **Dependencies** - `@codemirror/merge` `^6.10.2`, `codemirror` `^6.0.2`.

## Upgrade checklist

- [ ] Upgrade the application to Angular 20.
- [ ] Stop reading `mergeView` from `CodeDiffEditorComponent`; it is private now.
- [ ] Details: [Upgrading from 19.x](../guides/upgrading-from-19.md).
