---
label: What's New in 19.2.0
description: Release notes for @fsegurai/ngx-codemirror 19.2.0 and what changes when upgrading from 19.1.
order: 1
tags: [ "help", "changelog", "release-notes" ]
keywords: [ "19.2.0", "minor release", "Plain Text", "EditorView" ]
---

# What's New in 19.2.0

Released 2025-03-03. A minor release that refactors the code editor, clears the language on demand, and upgrades
dependencies.

## Features

- **Demo** - new languages support for the demo.
- **Browser support** - added browser support configuration.
- **Azure DevOps** - added an ADO workflow.
- **IDE** - added an IDE configuration file.

## Fixes

- **Code editor** - improved logic and validations: `language` set to `''` or `'Plain Text'` now removes the language.
- **Demo** - fixed the editor component demo.
- **Lint** - fixed ESLint formatting.

## Changes

- **Code editor** - refactored the component; the `view` field is now private.
- **Demo** - refactored the theme display names.
- **License** - updated the license.

## Security

- **Dependencies** - upgraded library versions: `@codemirror/merge` `^6.8.0`, `rxjs` peer `^7.8.2`.

## Upgrade checklist

- [ ] Stop reading `view` from `CodeEditorComponent`.
- [ ] Details: [Upgrading from 19.1](../guides/upgrading-from-19-1.md).
