---
label: Troubleshooting
description: Fix common problems with languages, themes, extensions, layout and forms.
order: 2
tags: [ "help", "troubleshooting" ]
keywords: [ "language-not-found", "invalid-theme", "height", "debugging" ]
---

# Troubleshooting

Start by listening to the `error` output: most problems are reported there, with a `[ngx-codemirror]` message.

| Symptom | Cause | Fix |
|---------|-------|-----|
| `language-not-found` | `languages` is empty or lacks the name | Pass `languages`, or set them in `provideCodeEditor()`; check `available`. |
| `invalid-theme` | The name is not built-in or registered | Register it with `withThemes()`; check `available`. |
| `theme-load-failed` / `extension-load-failed` | A lazy loader rejected | Check the dynamic import and `cause`; the next use retries. |
| `unknown-preset` | The name is not in `withExtensionPresets()` | Register it, or fix the spelling; check `available`. |
| `invalid-indent-unit` | `indentUnit` is not whole spaces or one repeated whitespace character | Use a number `>= 0` or a string such as `'\t'`. |
| Peer dependency warnings on install | CodeMirror packages are peers since 22.0.0 | Install them, see [Installation](../getting-started/installation.md). |
| The editor has no height | The host is `display: block` and `.cm-editor` fills it (`height: 100%`) | Give the host element a height. |
| `[(disabled)]` / `(change)` no longer compile | Renamed or removed in 22.0.0 | See [Migrating from 21.x](../guides/migrating-from-21.md). |
| Line numbers or search disappeared | `setup` is not `'basic'` | Set `[lineNumbers]="true"` and the other [convenience inputs](../features/convenience-inputs.md). |

Still stuck? Open an [issue](https://github.com/fsegurai/ngx-codemirror/issues) with a minimal reproduction.
