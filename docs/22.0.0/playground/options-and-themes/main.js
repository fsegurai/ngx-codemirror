// The compiler must load first: this sample has no build step, so Angular compiles templates in the browser (JIT).
import '@angular/compiler';
import { Component, inject, provideZonelessChangeDetection, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { languages } from '@codemirror/language-data';
import { CodeEditorComponent, CodeEditorThemeService, provideCodeEditor, withThemes } from '@fsegurai/ngx-codemirror';

// Indented with tabs, so the tab size select changes the indentation width.
const SOURCE = `// Toggle the options above and watch this editor change in place.
export function debounce(fn, wait = 200) {
\tlet timer;
\treturn (...args) => {
\t\tclearTimeout(timer);
\t\ttimer = setTimeout(() => fn(...args), wait); // a deliberately long line, so that line wrapping has something to wrap
\t};
}
`;

// 'light' and 'dark' are built in; the other names are registered with withThemes() below.
const THEMES = ['light', 'dark', 'github-light', 'nord', 'tokyo-night-storm'];

// The preview follows the app theme: <html data-theme="light|dark">. The provider starts on a registered theme of
// that scheme; the picker still switches to any of them.
const START_THEME = document.documentElement.dataset.theme === 'dark' ? 'tokyo-night-storm' : 'github-light';

const App = Component({
  selector: 'app-root',
  imports: [CodeEditorComponent],
  template: `
    <header class="toolbar">
      <label>
        Theme
        <select (change)="setTheme($any($event.target).value)">
          <!-- [selected] per option: a [value] on the select would run before @for creates the options. -->
          @for (name of themeNames; track name) {
            <option [value]="name" [selected]="name === (themes.theme() ?? startTheme)">{{ name }}</option>
          }
        </select>
      </label>
      <label>
        Setup
        <select [value]="setup()" (change)="setup.set($any($event.target).value)">
          <option value="basic">basic</option>
          <option value="minimal">minimal</option>
        </select>
      </label>
      <label>
        Tab size
        <select [value]="tabSize()" (change)="tabSize.set(+$any($event.target).value)">
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
      </label>
    </header>

    <fieldset class="options">
      <legend>Options</legend>
      <label><input type="checkbox" [checked]="lineWrapping()" (change)="lineWrapping.set(!lineWrapping())" /> lineWrapping</label>
      <label><input type="checkbox" [checked]="readonly()" (change)="readonly.set(!readonly())" /> readonly</label>
      <label><input type="checkbox" [checked]="lineNumbers()" (change)="lineNumbers.set(!lineNumbers())" /> lineNumbers</label>
      <label><input type="checkbox" [checked]="highlightWhitespace()" (change)="highlightWhitespace.set(!highlightWhitespace())" /> highlightWhitespace</label>
      <label><input type="checkbox" [checked]="indentWithTab()" (change)="indentWithTab.set(!indentWithTab())" /> indentWithTab</label>
    </fieldset>

    <!-- No theme input here: the editor follows CodeEditorThemeService, the app-wide theme. -->
    <ngx-code-editor
      [value]="source"
      language="javascript"
      [setup]="setup()"
      [tabSize]="tabSize()"
      [lineWrapping]="lineWrapping()"
      [readonly]="readonly()"
      [lineNumbers]="lineNumbers()"
      [highlightWhitespace]="highlightWhitespace()"
      [indentWithTab]="indentWithTab()"
      (error)="warn($event.message)" />

    <p class="hint">
      The registered themes are lazy: each one is downloaded the first time it is used, and the provider starts on {{ startTheme }} to match the page.
      {{ readonly() ? 'Read-only: the text can be selected and copied, not changed.' : 'Editable.' }}
    </p>
  `,
})(
  class {
    themes = inject(CodeEditorThemeService);
    themeNames = THEMES;
    startTheme = START_THEME;
    source = SOURCE;
    setup = signal('basic');
    tabSize = signal(4);
    lineWrapping = signal(false);
    readonly = signal(false);
    lineNumbers = signal(true);
    highlightWhitespace = signal(false);
    indentWithTab = signal(true);

    setTheme(name) {
      // Every editor without its own theme input switches at once.
      this.themes.set(name);
      console.log(`theme: ${name}`);
    }

    // An unknown theme or a failed lazy load arrives here as a CodeEditorError.
    warn(message) {
      console.warn(message);
    }
  },
);

bootstrapApplication(App, {
  providers: [
    provideZonelessChangeDetection(),
    // Defaults for every editor of the application; the service and instance inputs still win.
    provideCodeEditor(
      { theme: START_THEME, languages },
      withThemes({
        'github-light': () => import('@fsegurai/codemirror-theme-github-light').then((m) => m.githubLight),
        nord: () => import('@fsegurai/codemirror-theme-nord').then((m) => m.nord),
        'tokyo-night-storm': () =>
          import('@fsegurai/codemirror-theme-tokyo-night-storm').then((m) => m.tokyoNightStorm),
      }),
    ),
  ],
}).then(() => console.log('ngx-codemirror options-and-themes ready'));
