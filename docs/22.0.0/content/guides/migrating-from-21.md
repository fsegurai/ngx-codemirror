---
label: Migrating from 21.x
description: Step-by-step checklist for upgrading from @fsegurai/ngx-codemirror 21.x to 22.x.
order: 5
tags: [ "guides", "migration" ]
keywords: [ "breaking changes", "upgrade", "CodeEditorModule" ]
---

# Migrating from 21.x

22.0.0 contains breaking changes. Work through this checklist; the
[CHANGELOG](https://github.com/fsegurai/ngx-codemirror/blob/main/CHANGELOG.md) lists them all.

## Checklist

- [ ] **Minimum versions:** Angular `^22` (including `@angular/forms`), TypeScript `6.0`, Node.js `>=24.15` for the
  workspace tooling.
- [ ] **Install the CodeMirror peers** (see [Installation](../getting-started/installation.md)).
  `@codemirror/language-data` is no longer installed by the library.
- [ ] **Replace `CodeEditorModule`** with direct imports of `CodeEditorComponent`, `CodeDiffEditorComponent` or
  `CodeUnifiedDiffEditorComponent`.
- [ ] **Forms:** the components implement `FormValueControl` instead of `ControlValueAccessor`. Code calling
  `writeValue()`, `registerOnChange()`, `registerOnTouched()` or `setDisabledState()` must set `value` or `disabled`.
- [ ] **Rename outputs** (table below).
- [ ] **`value` is a `model()`** and only user edits emit `valueChange`. **`disabled` is an input**: `[(disabled)]`
  and `(disabledChange)` are gone. **`focus` is a method.**
- [ ] **Handle the `error` output:** errors are emitted, not logged.
- [ ] **Inputs default to `undefined`** so `provideCodeEditor()` can supply them. Code reading input signals directly
  now sees `undefined` when unset.
- [ ] **`setup="basic"`** no longer includes line numbers, fold gutter, active line, search and autocompletion
  directly; they are [convenience inputs](../features/convenience-inputs.md), on by default with `'basic'`.
- [ ] **`Theme`** accepts `'dark'`, `'auto'` and registered names; an unknown string emits `invalid-theme`.
  **`indentUnit`** is `number | string`.

## Renamed outputs

| Component | 21.x | 22.x |
|-----------|------|------|
| editor | `(change)` | `(valueChange)` |
| editor | `(focus)` / `(blur)` | `(focused)` / `(blurred)` |
| diff editor | `(originalFocus)` / `(originalBlur)` | `(originalFocused)` / `(originalBlurred)` |
| diff editor | `(modifiedFocus)` / `(modifiedBlur)` | `(modifiedFocused)` / `(modifiedBlurred)` |
