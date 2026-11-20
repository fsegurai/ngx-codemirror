---
label: Documentation Home
description: Documentation for @fsegurai/ngx-codemirror 19.0.0, CodeMirror 6 code and diff editors for Angular 19.
order: 0
tags: [ "documentation", "overview", "angular" ]
keywords: [ "codemirror", "code editor", "diff editor", "EventEmitter" ]
breadcrumbTitle: Home
publishedAt: "2024-12-06"
---

# @fsegurai/ngx-codemirror Docs

`@fsegurai/ngx-codemirror` brings [CodeMirror 6](https://codemirror.net/) to [Angular](https://angular.dev/) as two
standalone components. Both implement `ControlValueAccessor`, so they work with `ngModel` and reactive forms. In 19.0.0
every input is an `@Input()` field and every output an `@Output()` `EventEmitter`; signal inputs arrived in 19.1.0.

| Component | Selector | Built on |
|-----------|----------|----------|
| `CodeEditorComponent` | `ngx-code-editor` | `EditorView` |
| `CodeDiffEditorComponent` | `ngx-code-diff-editor` | `MergeView` (side by side) |

`CodeEditorModule` exports both components for NgModule-based applications.

## Quick path

1. Install the library: [Installation](getting-started/installation.md).
2. Import a component and bind its value: [Quick Start](getting-started/quick-start.md).
3. Pick standalone imports or the NgModule: [Setup Styles](getting-started/setup-styles.md).

## Sections

| Section | Read it when you want to |
|---------|--------------------------|
| [Getting Started](getting-started/README.md) | Install the library and render a first editor. |
| [Features](features/README.md) | Understand what each component and input does. |
| [Guides](guides/README.md) | Solve a task: theme switching, a unified diff, upgrading from 19.0.0-beta.1. |
| [API Reference](api/README.md) | Look up exact inputs, outputs and exported types. |
| [Examples](examples/README.md) | Copy a complete, working snippet. |
| [Help](help/README.md) | Find answers, fix common problems, and read the release notes. |

## Version

These docs describe `19.0.0` (released 2024-12-06), which targets Angular `^19`. See
[What's New in 19.0.0](help/whats-new.md) and the
[CHANGELOG](https://github.com/fsegurai/ngx-codemirror/blob/main/CHANGELOG.md).
