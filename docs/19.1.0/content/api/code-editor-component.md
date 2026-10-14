---
label: CodeEditorComponent
description: Every input and output of ngx-code-editor in 19.1.0.
order: 1
tags: [ "api", "editor" ]
keywords: [ "ngx-code-editor", "input()", "output()", "booleanAttribute" ]
---

# CodeEditorComponent

Selectors: `ngx-code-editor`, `code-editor`, `[code-editor]`. Host class `code-editor`. `OnPush`,
`ViewEncapsulation.None`. Implements `ControlValueAccessor` (value type `string`).

## Inputs

All inputs are signal inputs (`input()`) except `disabled`, which is an `@Input()` field.

| Input | Type | Default | Notes |
|-------|------|---------|-------|
| `root` | `Document \| ShadowRoot \| undefined` | `undefined` | Read at creation only. |
| `autoFocus` | `boolean` (attribute) | `false` | Read at creation only. |
| `value` | `string` | `''` | One-way input. |
| `disabled` | `boolean` (attribute, `@Input()`) | `false` | One-way; no `disabledChange` output. |
| `readonly` | `boolean` (attribute) | `false` | |
| `theme` | [`Theme`](types.md) | `'light'` | |
| `placeholder` | `string` | `''` | |
| `indentWithTab` | `boolean` (attribute) | `false` | |
| `indentUnit` | `number` | `0` | Spaces per indent; `0` = CodeMirror default. |
| `lineWrapping` | `boolean` (attribute) | `false` | |
| `highlightWhitespace` | `boolean` (attribute) | `false` | |
| `languages` | `LanguageDescription[]` | `[]` | |
| `language` | `string` | `''` | Name or alias; `''` is ignored (no reset). |
| `setup` | [`Setup`](types.md) | `'basic'` | |
| `extensions` | `Extension[]` | `[]` | Appended after the setup. |

"(attribute)" inputs use `booleanAttribute`, so `<ngx-code-editor readonly />` works.

## Outputs

Declared with `output()`.

| Output | Payload | When |
|--------|---------|------|
| `change` | `string` | The document changed (not for `External` transactions). |
| `focus` | `void` | The content DOM gained focus. |
| `blur` | `void` | The content DOM lost focus. |

## Public methods

Only the `ControlValueAccessor` methods (`writeValue`, `registerOnChange`, `registerOnTouched`,
`setDisabledState`) and the lifecycle hooks are public. The `view` field is also public; see below.

## Public fields

| Field | Type | Notes |
|-------|------|-------|
| `view` | `EditorView \| undefined` | Set in `ngOnInit`. Private from 19.2.0. |
