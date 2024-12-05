<p align="center">
  <img alt="@fsegurai/ngx-codemirror Logo" src="https://raw.githubusercontent.com/fsegurai/ngx-codemirror/main/demo/public/ngx-codemirror.png">
</p>

<p align="center">
  <a href="https://github.com/fsegurai/ngx-codemirror/actions/workflows/release-library.yml">
      <img src="https://github.com/fsegurai/ngx-codemirror/actions/workflows/release-library.yml/badge.svg"
          alt="Build Status">
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

**This is just a side project to provide additional features that fulfill my needs.**

`@fsegurai/ngx-codemirror` is an [Angular](https://angular.dev/) library that combines...

- [CodeMirror](https://codemirror.net/) to provide a versatile text editor implemented in JavaScript for the browser

### Table of contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Demo application](#demo-application)
- [License](#license)

## Installation

### @fsegurai/ngx-codemirror

To add `@fsegurai/ngx-codemirror` along with the required codemirror library to your `package.json` use the following
commands.

```bash
npm install @fsegurai/ngx-codemirror codemirror@^6.0.1 --save
```

## Configuration

### Component Module

For Not-Standalone mode, you need to import the `CodemirrorModule` in your Angular module.

```typescript
import { CodemirrorModule } from '@fsegurai/ngx-codemirror';

@NgModule({
    imports: [
        CodemirrorModule.forRoot({
            // codemirror options
        }),
    ],
})
export class AppModule {
}
```

### Standalone Component

For Standalone mode, you just need to import the components you want to use.

```typescript
/* CodemirrorComponent */
import { CodemirrorComponent } from '@fsegurai/ngx-codemirror';

// or

/* CodeDiffEditorComponent */
import { CodeDiffEditorComponent } from '@fsegurai/ngx-codemirror';
```

## Usage

### Basic Usage

```html
<ngx-code-editor
        [value]="editorContent"
        [theme]="'dark'"
        [language]="'javascript'"
        [placeholder]="'Type your code here...'"
        [lineWrapping]="true"
        (change)="onEditorChange($event)">
</ngx-code-editor>
```

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    editorContent = '// Start coding...';

    onEditorChange(content: string) {
        console.log('Editor Content:', content);
    }
}
```

### Advanced Usage

Customize themes, languages, and editor behavior dynamically:

```html
<ngx-code-editor
        [(ngModel)]="editorContent"
        [theme]="selectedTheme"
        [language]="selectedLanguage"
        [setup]="editorSetup"
        [indentWithTab]="true"
        [lineWrapping]="true"
        (change)="onEditorChange($event)">
</ngx-code-editor>
```

```typescript
@Component({
    selector: 'app-advanced-editor',
    templateUrl: './advanced-editor.component.html',
})
export class AdvancedEditorComponent {
    editorContent = '';
    selectedTheme = 'dark';
    selectedLanguage = 'javascript';
    editorSetup = 'basic';

    onEditorChange(updatedContent: string) {
        console.log('Updated Content:', updatedContent);
    }
}
```

### Integration

The library provides a customizable editor component with various inputs and outputs for flexible usage.

#### Inputs

- `value` - The initial content of the editor.
- `theme` - The theme of the editor.
- `language` - The language mode of the editor.
- `placeholder` - The placeholder text of the editor.
- `lineWrapping` - Enable line wrapping in the editor.
- `indentWithTab` - Enable indentation with tabs in the editor.
- `setup` - The setup of the editor.
- `extensions` - The extensions of the editor.
- and more...

#### Outputs

- `change` - The output event when the editor content changes.
- `focus` - The output event when the editor is focused.
- `blur` - The output event when the editor is blurred.

## Demo application

A demo is available @ [https://fsegurai.github.io/ngx-codemirror](https://fsegurai.github.io/ngx-codemirror) and its
source code can be found inside the `demo` directory.

    It's important to mention that for this project I'm using:
    Node.js v20.11.1 and Bun v1.1.32 (or later).

The following commands will clone the repository, install npm dependencies and serve the
application @ [http://localhost:4200](http://localhost:4200)

> It is advisable to use `bun` as the package manager for managing numerous dependencies, as it is faster than `npm` and
> generally more reliable.

```bash
git clone https://github.com/fsegurai/ngx-codemirror.git
cd ngx-codemirror
bun install
bun start
```

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
