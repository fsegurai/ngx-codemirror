<p align="center" class="intro">
  <img alt="NGX Codemirror Logo" src="https://raw.githubusercontent.com/fsegurai/ngx-codemirror/main/public/ngx-codemirror.png">
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

`@fsegurai/ngx-codemirror` is an [Angular](https://angular.dev/) library that combines...

- [CodeMirror](https://codemirror.net/) to provide a versatile text editor implemented in JavaScript for the browser
- [Diff CodeMirror](https://codemirror.net/) to provide a diff editor that allows you to compare two pieces of text side by side.
- [Unified Diff](https://codemirror.net/) to provide a unified diff editor that allows you to compare two pieces of text side by side.

### Table of contents

- [Installation](#installation)
- [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Configuration Options](#configuration-options)
- [Demo application](#demo-application)
- [License](#license)

## Installation

### @fsegurai/ngx-codemirror

To add `@fsegurai/ngx-codemirror` along with the required codemirror library to your `package.json` use the following
commands.

```bash
npm install @fsegurai/ngx-codemirror --save
```

## Usage

### Basic Usage

Import `CodemirrorModule` / `CodeDiffEditorComponent` or `CodeEditorComponent` in your Angular project as shown below:

    For Not-Standalone mode, you need to import the `CodemirrorModule` in your Angular module.

```typescript
import { CodeEditorComponent } from '@fsegurai/ngx-codemirror';

@Component({
    selector: 'app-root',
    imports: [CodeEditorComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    editorContent = '';
    selectedTheme = 'forest';
    selectedLanguage = 'javascript';
    editorSetup = 'basic';

    onEditorChange(content: string) {
        console.log('Editor Content:', content);
    }
}
```

    You can customize themes, languages, and editor behavior dynamically.

```html
<ngx-code-editor
        [value]="editorContent" // or [(ngModel)]="editorContent"
        [theme]="selectedTheme"
        [language]="selectedLanguage"
        [setup]="editorSetup"
        [indentWithTab]="true"
        [lineWrapping]="true"
        (ngModelChange)="onEditorChange($event)">
</ngx-code-editor>
```

### Configuration Options

The library provides a customizable editor component with various inputs and outputs for flexible usage.

#### ===== CodeEditorComponent =====

#####  Inputs

- `root` - Specifies the DOM root element for the editor (either Document or ShadowRoot; doesn't support dynamic changes)
- `autoFocus` - Sets whether the editor should focus on initialization (doesn't support dynamic changes)
- `value` - The editor's content value
- `disabled` - Whether the editor is disabled (two-way bindable)
- `readonly` - Whether the editor is read-only
- `theme` - The editor's theme ('light' by default)
- `placeholder` - Placeholder text shown when the editor is empty
- `indentWithTab` - Whether a Tab key creates indentation
- `indentUnit` - Number of spaces used for indentation
- `lineWrapping` - Whether text lines should wrap
- `highlightWhitespace` - Whether to highlight whitespace characters
- `languages` - Array of language descriptions for syntax highlighting (doesn't support dynamic changes)
- `language` - The programming language for syntax highlighting
- `setup` - The editor's built-in configuration ('basic,' 'minimal,' or null)
- `extensions` - Additional CodeMirror extensions to append to the configuration

##### Outputs

- `change` - Event emitted when the editor's content changes
- `focus` - Event emitted when the editor gains focus
- `blur` - Event emitted when the editor loses focus

####  ===== CodeDiffEditorComponent =====

##### Inputs

- `theme` - The editor's theme ('light' by default)
- `setup` - The editor's built-in configuration ('basic,' 'minimal,' or null; doesn't support dynamic changes)
- `originalValue` - The content shown in the original (left) editor panel
- `originalExtensions` - Extensions for the original editor (doesn't support dynamic changes)
- `modifiedValue` - The content shown in the modified (right) editor panel
- `modifiedExtensions` - Extensions for the modified editor
- `orientation` - Controls whether editor A or B is shown first
- `revertControls` - Controls whether revert controls are shown between changed chunks
- `renderRevertControl` - Function to customize rendering of revert buttons
- `highlightChanges` - Whether to highlight inserted and deleted text in changed chunks (true by default)
- `gutter` - Controls whether a gutter marker is shown next to changed lines (true by default)
- `disabled` - Whether the diff editor is disabled (two-way bindable)
- `collapseUnchanged` - Configuration for collapsing unchanged text sections
- `diffConfig` - Options passed to the diff algorithm

##### Outputs

- `originalValueChange` - Event emitted when the original editor's content changes
- `originalFocus` - Event emitted when focus is on the original editor
- `originalBlur` - Event emitted when original editor loses focus
- `modifiedValueChange` - Event emitted when the modified editor's content changes
- `modifiedFocus` - Event emitted when focus is on the modified editor
- `modifiedBlur` - Event emitted when modified editor loses focus

## Demo application

To see the components in action, check out the [[DEMO]](https://fsegurai.github.io/ngx-codemirror).

To set up the demo locally, follow the next steps:

```bash
git clone https://github.com/fsegurai/ngx-codemirror.git
bun install
bun start
```

This will serve the application locally at [http://localhost:4200](http://localhost:4200).

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
