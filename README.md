<p align="center" class="intro">
  <img alt="NGX Codemirror Logo" src="https://raw.githubusercontent.com/fsegurai/ngx-codemirror/main/demo/public/ngx-codemirror.png">
</p>

<p align="center" class="intro">
  <a href="https://github.com/fsegurai/ngx-codemirror">
      <img src="https://img.shields.io/azure-devops/build/fsegurai/93779823-473d-4fb3-a5b1-27aaa1a88ea2/22/main?label=Build%20Status&"
          alt="Build Main Status">
  </a>
  <a href="https://github.com/fsegurai/ngx-codemirror/releases/latest">
      <img src="https://img.shields.io/github/v/release/fsegurai/ngx-codemirror"
          alt="Latest Release">
  </a>
  <br>
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/fsegurai/ngx-codemirror">
  <img alt="Dependency status for repo" src="https://img.shields.io/librariesio/github/fsegurai/ngx-codemirror">
  <a href="https://opensource.org/licenses/MIT">
    <img alt="GitHub License" src="https://img.shields.io/github/license/fsegurai/ngx-codemirror">
  </a>
  <br>
  <img alt="Stars" src="https://img.shields.io/github/stars/fsegurai/ngx-codemirror?style=square&labelColor=343b41"/> 
  <img alt="Forks" src="https://img.shields.io/github/forks/fsegurai/ngx-codemirror?style=square&labelColor=343b41"/>
  <a href="https://www.npmjs.com/package/@fsegurai/ngx-codemirror">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/@fsegurai/ngx-codemirror">
  </a>
</p>

`@fsegurai/ngx-codemirror` brings [CodeMirror 6](https://codemirror.net/) to [Angular](https://angular.dev/) as three
standalone, signal-based components:

- `ngx-code-editor` - a code editor.
- `ngx-code-diff-editor` - a side-by-side diff editor ([`MergeView`](https://codemirror.net/docs/ref/#merge.MergeView)).
- `ngx-code-unified-diff-editor` - a unified diff editor
  ([`unifiedMergeView`](https://codemirror.net/docs/ref/#merge.unifiedMergeView)).

They work with Signal Forms, reactive forms and `ngModel`, and are zoneless and SSR-safe. Themes and extensions can be
registered once with `provideCodeEditor()` and loaded lazily.

### Table of contents

- [Installation](#installation)
- [Compatibility](#compatibility)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Themes](#themes)
- [Extensions](#extensions)
- [Convenience inputs](#convenience-inputs)
- [Errors](#errors)
- [Programmatic API](#programmatic-api)
- [Components API](#components-api)
- [Migrating from 21.x](#migrating-from-21x)
- [Demo application](#demo-application)
- [License](#license)

## Installation

Install the library with its CodeMirror peer dependencies:

```bash
npm install @fsegurai/ngx-codemirror codemirror @codemirror/autocomplete @codemirror/commands @codemirror/language @codemirror/lint @codemirror/merge @codemirror/search @codemirror/state @codemirror/view
```

`@angular/common`, `@angular/core` and `@angular/forms` (`^22`) are peer dependencies too. For syntax highlighting,
add the language descriptions you need, for example all of them with:

```bash
npm install @codemirror/language-data
```

## Compatibility

| Angular | @fsegurai/ngx-codemirror |
|---------|--------------------------|
| 22.x    | 22.x                     |
| 21.x    | 21.x                     |
| 20.x    | 20.x                     |
| 19.x    | 19.x                     |

Since 21.x the library is zoneless (`provideZonelessChangeDetection()`) and does not require Zone.js.

## Quick start

Import the standalone component and bind its value with the forms API you use:

```typescript
import { Component, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { languages } from '@codemirror/language-data';
import { CodeEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
  selector: 'app-root',
  imports: [CodeEditorComponent, FormField],
  template: `
    <ngx-code-editor
      [formField]="editorForm.code"
      language="javascript"
      [languages]="languages"
      theme="dark"
      [lineWrapping]="true" />
  `,
})
export class AppComponent {
  protected readonly languages = languages;
  protected readonly model = signal({ code: 'const answer = 42;' });
  protected readonly editorForm = form(this.model);
}
```

The same component works with every forms API:

| Binding | Import |
|---------|--------|
| `<ngx-code-editor [formField]="f.code" />` | `FormField` from `@angular/forms/signals` |
| `<ngx-code-editor [formControl]="code" />` / `formControlName` | `ReactiveFormsModule` |
| `<ngx-code-editor [(ngModel)]="code" />` | `FormsModule` |
| `<ngx-code-editor [(value)]="code" />` | nothing (a plain `model()`) |

> `language` is looked up by name or alias in `languages`: pass both, or set `languages` once in
> [`provideCodeEditor()`](#configuration). Without any `languages`, the editor emits a `language-not-found` error.

## Configuration

`provideCodeEditor(options, ...features)` sets the default inputs of every editor of an injector. Use it in the
application providers, a route's `providers` or a component's `providers`; a nested call merges over its ancestors.

```typescript
import { ApplicationConfig } from '@angular/core';
import { languages } from '@codemirror/language-data';
import { provideCodeEditor, withExtensionPresets, withExtensions, withThemes } from '@fsegurai/ngx-codemirror';

export const appConfig: ApplicationConfig = {
  providers: [
    provideCodeEditor(
      { theme: 'auto', setup: 'basic', lineWrapping: true, languages },
      withThemes(
        { nord: () => import('@fsegurai/codemirror-theme-bundle').then((m) => m.nord) },
        { light: 'light', dark: 'nord' },
      ),
      withExtensions([myExtension]),
      withExtensionPresets({ vim: () => import('@replit/codemirror-vim').then((m) => m.vim()) }),
    ),
  ],
};
```

| Feature | What it does |
|---------|--------------|
| `withThemes(themes, { light?, dark? })` | Registers named themes, eager or lazy. `light` / `dark` are the themes `'auto'` uses. |
| `withExtensions(extensions, { mode? })` | Global extensions for every editor. See [Extensions](#extensions). |
| `withExtensionPresets(presets)` | Named extensions, enabled per editor with `[presets]="['vim']"`. |

Precedence, lowest first: built-in defaults, providers (a nested one over its parent), instance inputs. An
`undefined` value never overrides. The options are those of the inputs (`theme`, `setup`, `placeholder`,
`indentWithTab`, `indentUnit`, `lineWrapping`, `highlightWhitespace`, `languages`, the convenience inputs and
`presets`), plus global `extensions`.

## Themes

The `theme` input (and the `theme` option) accepts:

| Value | Theme |
|-------|-------|
| `'light'` | CodeMirror's default look (the built-in default) |
| `'dark'` | A built-in dark base |
| `'auto'` | Follows `prefers-color-scheme`, using the `light` / `dark` names of `withThemes()` (else the built-ins) |
| a registered name | A theme registered with `withThemes()`; a lazy theme is loaded on first use and cached |
| an `Extension` | Any CodeMirror [theme](https://codemirror.net/examples/styling/#themes) |

To switch every editor at once (for example from an app light/dark toggle), use `CodeEditorThemeService`. Editors
with their own `theme` input keep it.

```typescript
inject(CodeEditorThemeService).set('nord'); // undefined goes back to the provider's theme
```

Precedence, highest first: the instance `theme` input, `CodeEditorThemeService`, the `theme` of `provideCodeEditor()`,
`'light'`. An unknown name emits `invalid-theme` and keeps the current theme.

## Extensions

Extensions can be eager (`Extension`) or lazy (`() => Promise<Extension>`, loaded once and shared by every editor).

| Where | How | Notes |
|-------|-----|-------|
| Every editor | `withExtensions([...])` or `provideCodeEditor({ extensions })` | Nested providers append to their parent. |
| One editor | `[extensions]="[...]"` | Appended after the global extensions. |
| Replace globals | `withExtensions([...], { mode: 'replace' })` | An editor with its own `extensions` input uses only those. |
| Opt-in per editor | `withExtensionPresets({ name: ext })` + `[presets]="['name']"` | Unknown names emit `unknown-preset`. |

```typescript
withExtensions([
  EditorView.lineWrapping,
  () => import('@replit/codemirror-indentation-markers').then((m) => m.indentationMarkers()),
]);
```

A failed lazy load emits `extension-load-failed` and keeps the extensions already applied.

## Convenience inputs

Common CodeMirror features have their own inputs, so they need no extension code. With `setup="basic"` the boolean
ones default to on; with another setup they default to off. An explicit value always wins.

| Input | Type | Default |
|-------|------|---------|
| `lineNumbers` | `boolean` | on with `'basic'` |
| `foldGutter` | `boolean` | on with `'basic'` |
| `highlightActiveLine` | `boolean` | on with `'basic'` |
| `search` | `boolean \| SearchConfig` | on with `'basic'` |
| `autocompletion` | `boolean \| AutocompletionConfig` | on with `'basic'` |
| `tabSize` | `number` | `4` |
| `lint` | `LintSource \| { source, config?, gutter? } \| null` | none (`null` turns the provider's linter off) |
| `keymap` | `readonly KeyBinding[]` | none (high precedence) |

```html
<ngx-code-editor [formField]="f.code" [lineNumbers]="false" [tabSize]="2" [lint]="{ source: myLinter, gutter: true }" />
```

## Errors

Every component emits `error` with a `CodeEditorError` (discriminated by `code`) instead of throwing, and keeps its
current state. In development mode the error is also logged as a `[ngx-codemirror]` warning.

| `code` | Constant | Emitted when |
|--------|----------|--------------|
| `language-not-found` | `ERROR_LANGUAGE_NOT_FOUND` | `language` is not in `languages` (`available` lists the names) |
| `language-load-failed` | `ERROR_LANGUAGE_LOAD_FAILED` | Loading the language failed (`cause`) |
| `invalid-theme` | `ERROR_INVALID_THEME` | Unknown theme name (`available`) |
| `theme-load-failed` | `ERROR_THEME_LOAD_FAILED` | Loading a lazy theme failed (`cause`) |
| `extension-load-failed` | `ERROR_EXTENSION_LOAD_FAILED` | Loading a lazy extension failed (`source`, `cause`) |
| `unknown-preset` | `ERROR_UNKNOWN_PRESET` | Unknown preset name (`available`) |
| `invalid-indent-unit` | `ERROR_INVALID_INDENT_UNIT` | Invalid `indentUnit` (`value`); the default is used |

```typescript
onError(error: CodeEditorError): void {
  if (error.code === ERROR_LANGUAGE_NOT_FOUND) console.warn(error.message, error.available);
}
```

## Programmatic API

Get the component with `viewChild()` and use its signals and methods:

```typescript
private readonly editor = viewChild.required(CodeEditorComponent);

format(): void {
  const code = this.editor().getValue();
  this.editor().setValue(prettify(code)); // emits valueChange once
  this.editor().focus();
}
```

| Member | Editor / unified | Diff editor |
|--------|------------------|-------------|
| `view()` / `mergeView()` | `EditorView \| undefined` | `MergeView \| undefined` |
| `ready` output | emits the `EditorView` | emits the `MergeView` |
| `focus()` | focuses the editor | focuses the modified side |
| `getValue()` / `setValue()` | `string` | `{ original, modified }` |
| `goToNextChunk()` / `goToPreviousChunk()` | unified only | moves on the modified side |
| `getChunks()` | unified only | the changed chunks |

Views are created after the first render (`afterNextRender`), so `view()` is `undefined` on the server and before
`ready` emits.

## Components API

### Shared inputs

All three components take these inputs, plus the [convenience inputs](#convenience-inputs).

| Input | Type | Description |
|-------|------|-------------|
| `disabled` | `boolean` | Not editable and read-only. |
| `readonly` | `boolean` | Read-only, but can be focused and selected. |
| `invalid` / `required` / `touched` | `boolean` | Form state, set by the forms integration (`aria-invalid` / `aria-required`). |
| `theme` | `Theme` | See [Themes](#themes). |
| `placeholder` | `string` | Shown when the document is empty (modified side of a diff editor). |
| `indentWithTab` | `boolean` | The Tab key indents. |
| `indentUnit` | `number \| string` | Spaces (`0` = default) or a whitespace string such as `'\t'`. |
| `lineWrapping` | `boolean` | Wraps long lines. |
| `highlightWhitespace` | `boolean` | Highlights whitespace characters. |
| `languages` | `readonly LanguageDescription[]` | The languages `language` is looked up in. |
| `language` | `string` | Language name or alias (case-insensitive). |
| `setup` | `'basic' \| 'minimal' \| null` | The built-in setup. Default `'basic'`. |
| `presets` | `readonly string[]` | Presets registered with `withExtensionPresets()`. |

Shared outputs: `touch` (on blur, marks a bound field touched) and `error` (`CodeEditorError`).

### `ngx-code-editor`

| Input / output | Type | Description |
|----------------|------|-------------|
| `value` | `model<string>` | The document. Two-way bindable; used by the forms integration. |
| `extensions` | `ExtensionInput` | Extra extensions, eager or lazy. |
| `root` | `Document \| ShadowRoot` | The DOM root (read at creation). |
| `autoFocus` | `boolean` | Focuses the editor on creation. |
| `(valueChange)` | `string` | A user edit (programmatic writes do not emit). |
| `(focused)` / `(blurred)` | `void` | Focus changes. |
| `(ready)` | `EditorView` | The view was created. |

### `ngx-code-diff-editor`

| Input / output | Type | Description |
|----------------|------|-------------|
| `value` | `model<DiffEditorModel>` | Both documents, `{ original, modified }`. Works with forms. |
| `originalValue` / `modifiedValue` | `string` | One side; the latest of these and `value` wins. |
| `originalExtensions` / `modifiedExtensions` | `ExtensionInput` | Extra extensions per side. |
| `originalReadonly` | `boolean` | Makes only the original side read-only. |
| `orientation` | `'a-b' \| 'b-a'` | Which document is shown first. |
| `revertControls` | `'a-to-b' \| 'b-to-a'` | Revert buttons between changed chunks. |
| `renderRevertControl` | `() => HTMLElement` | Renders the revert buttons. |
| `highlightChanges` | `boolean` | Highlights changed text. Default `true`. |
| `gutter` | `boolean` | Gutter markers next to changed lines. Default `true`. |
| `collapseUnchanged` | `{ margin?, minSize? }` | Collapses unchanged text. |
| `diffConfig` | `DiffConfig` | Options of the diff algorithm. |
| `(valueChange)` | `DiffEditorModel` | A user edit on either side. |
| `(originalValueChange)` / `(modifiedValueChange)` | `string` | A user edit on one side. |
| `(originalFocused)` / `(originalBlurred)` | `void` | Focus of the original side. |
| `(modifiedFocused)` / `(modifiedBlurred)` | `void` | Focus of the modified side. |
| `(ready)` | `MergeView` | The merge view was created. |

### `ngx-code-unified-diff-editor`

It takes the inputs and outputs of `ngx-code-editor` (`value` is the modified document), plus:

| Input / output | Type | Description |
|----------------|------|-------------|
| `original` | `model<string>` | The document compared with. Accepting a chunk updates it (`[(original)]`). |
| `mergeControls` | `boolean \| (type, action) => HTMLElement` | Accept/reject buttons. Default `true`. |
| `highlightChanges` | `boolean` | Highlights changed text. Default `true`. |
| `gutter` | `boolean` | Gutter markers next to changed lines. Default `true`. |
| `syntaxHighlightDeletions` | `boolean` | Syntax-highlights deleted lines. Default `true`. |
| `allowInlineDiffs` | `boolean` | Shows small changes inline. Default `false`. |
| `collapseUnchanged` | `{ margin?, minSize? }` | Collapses unchanged text. |
| `diffConfig` | `DiffConfig` | Options of the diff algorithm. |

```html
<ngx-code-unified-diff-editor [(original)]="original" [(value)]="modified" language="typescript" [languages]="languages" />
```

## Migrating from 21.x

22.0.0 contains breaking changes. Check each item; the [CHANGELOG](CHANGELOG.md) lists them all.

1. **Minimum versions:** Angular `^22` (including `@angular/forms`), TypeScript `6.0`, Node.js `>=24.15` for the
   workspace tooling.
2. **New peer dependencies:** install `@codemirror/autocomplete`, `@codemirror/commands`, `@codemirror/language`,
   `@codemirror/lint`, `@codemirror/merge`, `@codemirror/search`, `@codemirror/state`, `@codemirror/view` and
   `codemirror` (see [Installation](#installation)). `@codemirror/language-data` is no longer installed by the library.
3. **`CodeEditorModule` is removed:** import `CodeEditorComponent`, `CodeDiffEditorComponent` or
   `CodeUnifiedDiffEditorComponent` directly.
4. **Forms:** the components implement Signal Forms `FormValueControl` instead of `ControlValueAccessor`
   (`NG_VALUE_ACCESSOR` is gone). `[formField]`, `formControlName`, `[formControl]` and `[(ngModel)]` keep working.
   Code calling `writeValue()`, `registerOnChange()`, `registerOnTouched()` or `setDisabledState()` must set `value` or
   `disabled` instead.
5. **Renamed outputs** (they clashed with native DOM events):

   | Component | 21.x | 22.x |
   |-----------|------|------|
   | editor | `(change)` | `(valueChange)` |
   | editor | `(focus)` / `(blur)` | `(focused)` / `(blurred)` |
   | diff editor | `(originalFocus)` / `(originalBlur)` | `(originalFocused)` / `(originalBlurred)` |
   | diff editor | `(modifiedFocus)` / `(modifiedBlur)` | `(modifiedFocused)` / `(modifiedBlurred)` |

6. **`value` is a `model()`** and only user edits emit `valueChange`. **`disabled` is an input**: `[(disabled)]` and
   `(disabledChange)` are gone, and a disabled editor is also read-only. **`focus` is now a method.**
7. **Errors are emitted, not logged:** handle the new `error` output. An unknown `language`, a failed language load,
   an unknown theme name and an invalid `indentUnit` emit `error` and keep the current state; console output is a
   dev-mode warning only.
8. **Inputs default to `undefined`** so `provideCodeEditor()` can supply them; the effective defaults are unchanged.
   Code reading the input signals directly now sees `undefined` when unset.
9. **`setup="basic"`** no longer includes line numbers, fold gutter, active line, search and autocompletion directly:
   they are the [convenience inputs](#convenience-inputs), on by default with `'basic'`. The resulting editor is
   equivalent; set an input to `false` to remove that part.
10. **`Theme`** accepts `'dark'`, `'auto'` and registered names; an unknown string emits `invalid-theme` instead of
    being passed to CodeMirror. **`indentUnit`** is `number | string`.

## Demo application

To see the components in action, check out the [demo](https://fsegurai.github.io/ngx-codemirror).

To set up the demo locally:

```bash
git clone https://github.com/fsegurai/ngx-codemirror.git
cd ngx-codemirror
bun install
bun start
```

This serves the application at [http://localhost:4200](http://localhost:4200).

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
