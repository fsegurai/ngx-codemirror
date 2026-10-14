---
label: Documentation Home
description: Documentation for @fsegurai/ngx-codemirror 22.0.0, CodeMirror 6 editors for Angular as standalone, signal-based components.
order: 0
tags: [ "documentation", "overview", "angular" ]
keywords: [ "codemirror", "code editor", "diff editor", "signals" ]
breadcrumbTitle: Home
---

# @fsegurai/ngx-codemirror Docs

`@fsegurai/ngx-codemirror` brings [CodeMirror 6](https://codemirror.net/) to [Angular](https://angular.dev/) as three
standalone, signal-based components. They work with Signal Forms, reactive forms and `ngModel`, and are zoneless and
SSR-safe.

| Component | Selector | Built on |
|-----------|----------|----------|
| `CodeEditorComponent` | `ngx-code-editor` | `EditorView` |
| `CodeDiffEditorComponent` | `ngx-code-diff-editor` | `MergeView` (side by side) |
| `CodeUnifiedDiffEditorComponent` | `ngx-code-unified-diff-editor` | `unifiedMergeView` |

## Quick path

1. Install the library and its CodeMirror peers: [Installation](getting-started/installation.md).
2. Import a component and bind its value: [Quick Start](getting-started/quick-start.md).
3. Set app-wide defaults once with `provideCodeEditor()`: [Configuration](getting-started/configuration.md).

## Sections

| Section | Read it when you want to |
|---------|--------------------------|
| [Getting Started](getting-started/README.md) | Install, render a first editor, and configure defaults. |
| [Features](features/README.md) | Understand what each component and option does. |
| [Guides](guides/README.md) | Solve a task: theme switching, lazy loading, migrating from 21.x. |
| [API Reference](api/README.md) | Look up exact inputs, outputs, methods, functions and types. |
| [Examples](examples/README.md) | Copy a complete, working snippet. |
| [Help](help/README.md) | Find answers and fix common problems. |

## Version

These docs describe `22.0.0`, which targets Angular `^22`. See the
[CHANGELOG](https://github.com/fsegurai/ngx-codemirror/blob/main/CHANGELOG.md) for the full list of changes.
