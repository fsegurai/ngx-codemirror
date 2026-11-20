---
label: Troubleshooting
description: Fixes for a collapsed editor, missing highlighting, lost options, unexpected change events and import errors.
order: 3
tags: [ "help", "troubleshooting" ]
keywords: [ "height", "language not found", "reconfigure", "change event" ]
---

# Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| The editor has no visible height | `.cm-editor` is `height: 100%` of an unsized host. | Give the host element a height. |
| `No supported languages` in the console | `language` is set but `languages` is empty. | Pass `[languages]="languages"`. |
| `Language not found: ...` | The name matches no `name` or `alias`. | Use a listed name, for example `JavaScript` or `python`. |
| Theme, readonly or language reset after an input change | Changing `setup` or `extensions` rebuilds the state with empty compartments. | Keep extension arrays stable; re-set the option if needed. |
| `change` fires when the parent sets `value` | The component does not annotate its own writes with `External`. | Ignore the echo, or compare with the current value. |
| A string theme like `'dark'` does nothing | `Theme` is `'light'` or an `Extension`. | Import and pass a theme extension. |
| `root` or `autoFocus` changes have no effect | Both are read only when the view is created. | Recreate the editor (for example with `@if`). |
| `[(disabled)]` does not compile | `disabled` is an `@Input()` with no `disabledChange` output. | Use `[disabled]`. |
| Build cannot resolve the module `ngx-codemirror` | The diff editor imports from the package name `ngx-codemirror` instead of a relative path; the 20.0.0 notes list this as fixed. | Upgrade to 20.x when possible. |
| Peer dependency warning for `@angular/*` | 19.x requires Angular `^19`. | Upgrade Angular or use the matching library major. |
