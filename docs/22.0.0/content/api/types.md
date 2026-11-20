---
label: Types
description: Exported types, the darkTheme extension and the External annotation.
order: 8
tags: [ "api", "types" ]
keywords: [ "Theme", "Setup", "LintOption", "DiffEditorModel", "darkTheme" ]
---

# Types

## Editor options

| Type | Definition |
|------|------------|
| `Theme` | `'light' \| 'dark' \| 'auto' \| string \| Extension` |
| `IndentUnit` | `number \| string` (whole spaces, or one repeated whitespace character) |
| `Setup` | `'basic' \| 'minimal' \| null` |
| `SearchConfig` | Options of CodeMirror's `search()` |
| `AutocompletionConfig` | Options of CodeMirror's `autocompletion()` |
| `LintConfig` | Options of CodeMirror's `linter()` |
| `LintGutterConfig` | Options of CodeMirror's `lintGutter()` |
| `LintOption` | `LintSource \| { source: LintSource \| null; config?: LintConfig; gutter?: boolean \| LintGutterConfig }` |

## Extensions

| Type | Definition |
|------|------------|
| `LazyExtension` | `() => Promise<Extension>` |
| `ExtensionItem` | `Extension \| LazyExtension` |
| `ExtensionInput` | `ExtensionItem \| readonly ExtensionItem[]` |

## Diff editors

| Type | Definition |
|------|------------|
| `DiffEditorModel` | `{ original: string; modified: string }` |
| `Orientation` | `'a-b' \| 'b-a'` |
| `RevertControls` | `'a-to-b' \| 'b-to-a'` |
| `RenderRevertControl` | `() => HTMLElement` |
| `CollapseUnchanged` | `{ margin?: number; minSize?: number }` (defaults 3 and 4) |
| `UnifiedMergeControls` | `boolean \| ((type: 'reject' \| 'accept', action: (event: MouseEvent) => void) => HTMLElement)` |

## Values

| Export | Type | Description |
|--------|------|-------------|
| `darkTheme` | `Extension` | The built-in dark base used by `theme="dark"`: editor chrome only, no syntax highlighting. |
| `External` | `AnnotationType<boolean>` | Marks programmatic document changes (such as `setValue()`), never echoed back as user edits. |
