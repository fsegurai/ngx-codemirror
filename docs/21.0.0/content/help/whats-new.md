---
label: What's New in 21.0.0
description: Release notes for @fsegurai/ngx-codemirror 21.0.0 and what changes when upgrading from 20.x.
order: 1
tags: [ "help", "changelog", "release-notes" ]
keywords: [ "21.0.0", "breaking changes", "Angular 21", "zoneless" ]
---

# What's New in 21.0.0

Released 2026-10-09. The library moves to Angular 21 and drops Zone.js. The component API is unchanged from 20.0.0.

## Breaking changes

| Area | 20.0.0 | 21.0.0 |
|------|--------|--------|
| Angular peers | `^20.0.4` | `^21.0.0` |
| `zone.js` peer | `~0.15.1` | removed; zoneless-compatible |

## Fixes

- **Code diff editor** - loose equality (`==`) comparisons replaced with strict equality (`===`).
- **Demo** - zoneless scrollspy initialization, accessible icon buttons, Get Started fallbacks, and restored
  TypeScript highlighting in `prism.ts`.

## Changes

- TypeScript `5.9`; `@codemirror/merge` `^6.12.2`; `@codemirror/language-data` `^6.5.2`.
- `ng-package.json` lists the real non-peer dependencies.
- Tests moved from Karma/Jasmine to Vitest; linting moved from ESLint to Biome.
- The demo runs zoneless, consumes the built library, uses signals, and replaces `gumshoejs` with
  `@fsegurai/scrollspy`.
- New `CONTRIBUTING.md`, `CHANGELOG.md`, and a README Compatibility section.

## Upgrade checklist

- [ ] Upgrade the application to Angular 21.
- [ ] Optionally go zoneless and remove `zone.js`.
- [ ] No code changes are needed. Details: [Upgrading from 20.x](../guides/upgrading-from-20.md).
