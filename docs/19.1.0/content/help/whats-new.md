---
label: What's New in 19.1.0
description: Release notes for @fsegurai/ngx-codemirror 19.1.0 and what changes when upgrading from 19.0.
order: 1
tags: [ "help", "changelog", "release-notes" ]
keywords: [ "19.1.0", "input()", "output()", "minor release" ]
---

# What's New in 19.1.0

Released 2024-12-06, the same day as 19.0.0. The components move to signal inputs and `output()`.

## Fixes

- **Demo** - improved the TOC rendering and optimized the playground imports.
- **Lint** - fixed ESLint formatting.

## Changes

- **Signals** - migrated to signals for inputs, outputs, service injection, and the control flow syntax. In the library
  this means `input()` for every input except `disabled`, `originalValue` and `modifiedValue`, `output()` for every
  output, and `inject(ElementRef)` instead of constructor injection.

## Security

- **Dependencies** - upgraded library versions (development tooling; the library's own dependency ranges did not
  change).

## Upgrade checklist

- [ ] Stop assigning inputs from TypeScript; bind them in templates.
- [ ] Details: [Upgrading from 19.0](../guides/upgrading-from-19-0.md).
