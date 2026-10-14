---
label: What's New in 19.0.0
description: Release notes for @fsegurai/ngx-codemirror 19.0.0, the first stable release, and what changed since the beta.
order: 1
tags: [ "help", "changelog", "release-notes" ]
keywords: [ "19.0.0", "stable release", "Angular 19", "diff editor theme" ]
---

# What's New in 19.0.0

Released 2024-12-06. The first stable release for Angular 19, three days after `19.0.0-beta.1`.

## Features

- **Languages** - new languages support (demo language samples for CQL, MariaDB SQL, MS SQL and PL/SQL).
- **Demo** - complete demonstration of the editor components: code editor, unified diff and side-by-side diff modes.

## Fixes

- **Editors** - improved editor validations and removed previous limitations: the diff editor gained a `theme`
  input and now reconfigures when `setup` or its extension inputs change; the default form callbacks no longer
  recurse or refocus the editor.
- **Demo** - improved the demo and the README.
- **Registry** - fixed the packages registry configuration.
- **Lint** - fixed ESLint errors.

## Changes

- **Project** - updated `.gitignore` for JetBrains IDEs.
- **API** - the setter methods of both components (`setValue`, `setTheme` and so on) are private now.

The "Editors" and "API" details come from the source diff against `19.0.0-beta.1`; the CHANGELOG entry only says
"improved editor validations and removed previous limitations".

## Upgrade checklist

- [ ] Stop calling the components' setter methods.
- [ ] Details: [Upgrading from 19.0.0-beta.1](../guides/upgrading-from-beta-1.md).
