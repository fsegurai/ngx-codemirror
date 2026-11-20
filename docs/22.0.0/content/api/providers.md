---
label: Providers
description: Signatures of provideCodeEditor(), withThemes(), withExtensions(), withExtensionPresets() and the injection tokens.
order: 5
tags: [ "api", "providers" ]
keywords: [ "provideCodeEditor", "CodeEditorConfig", "CodeEditorFeature", "InjectionToken" ]
---

# Providers

## Functions

```typescript
function provideCodeEditor(config?: CodeEditorConfig, ...features: CodeEditorFeature[]): Provider[];

function withThemes(
  themes: Readonly<Record<string, Extension | LazyExtension>>,
  options?: ThemesOptions,
): CodeEditorFeature;

function withExtensions(extensions: ExtensionInput, options?: ExtensionsOptions): CodeEditorFeature;

function withExtensionPresets(presets: Readonly<Record<string, Extension | LazyExtension>>): CodeEditorFeature;
```

| Function | Notes |
|----------|-------|
| `provideCodeEditor` | Merges over the parent injector: options by key, themes and presets by name, global extensions appended. Call it once per injector. |
| `withThemes` | A registered name wins over the built-in `'light'` / `'dark'`; `'auto'` is reserved. |
| `withExtensions` | Global extensions, added before the instance `extensions`. |
| `withExtensionPresets` | Enabled per editor with `[presets]="['name']"` or the `presets` option. |

## Configuration types

| Type | Shape |
|------|-------|
| `CodeEditorOptions` | Optional defaults: `theme`, `setup`, `placeholder`, `indentWithTab`, `indentUnit`, `lineWrapping`, `highlightWhitespace`, `languages`, `tabSize`, `lineNumbers`, `foldGutter`, `highlightActiveLine`, `search`, `autocompletion`, `lint`, `keymap`, `presets`. |
| `CodeEditorConfig` | `CodeEditorOptions` plus `extensions?: ExtensionInput` (same as `withExtensions(extensions)`). |
| `ThemesOptions` | `{ light?: string; dark?: string }`: the theme names `'auto'` uses. |
| `ThemesRegistration` | `ThemesOptions` plus `themes`. |
| `ExtensionsMode` | `'append' \| 'replace'`. |
| `ExtensionsOptions` | `{ mode?: ExtensionsMode }`; default `'append'`. |
| `ExtensionsRegistration` | `ExtensionsOptions` plus `extensions: readonly ExtensionItem[]`. |
| `CodeEditorFeature` | Returned by the `withX()` functions; treat it as opaque. |

## Injection tokens

| Token | Value |
|-------|-------|
| `CODE_EDITOR_CONFIG` | `CodeEditorOptions`; `providedIn: 'root'`, `{}` without a provider. |
| `CODE_EDITOR_THEMES` | Multi token of `ThemesRegistration`, filled by `withThemes()`. |
| `CODE_EDITOR_EXTENSIONS` | Multi token of `ExtensionsRegistration`, filled by `withExtensions()`. |
| `CODE_EDITOR_EXTENSION_PRESETS` | Multi token of preset records, filled by `withExtensionPresets()`. |

Prefer the functions; the tokens are exported for inspection and advanced setups.
