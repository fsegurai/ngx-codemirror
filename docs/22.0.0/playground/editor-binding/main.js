// The compiler must load first: this sample has no build step, so Angular compiles templates in the browser (JIT).
import '@angular/compiler';
import { Component, computed, provideZonelessChangeDetection, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { languages } from '@codemirror/language-data';
import { CodeEditorComponent, provideCodeEditor, withThemes } from '@fsegurai/ngx-codemirror';

// The preview follows the app theme: <html data-theme="light|dark">. The editor starts on a full theme of that scheme
// (syntax colors included), registered lazily below.
const THEME = document.documentElement.dataset.theme === 'dark' ? 'tokyo-night-storm' : 'github-light';

// One starter document per language; `language` is looked up by name or alias in `languages`.
const SNIPPETS = {
  JavaScript: `// Edit me: the panel on the right follows every keystroke.
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('ngx-codemirror'));
`,
  TypeScript: `interface User {
  id: number;
  name: string;
}

const users: User[] = [{ id: 1, name: 'Ada' }];
export const names = users.map((user) => user.name);
`,
  JSON: `{
  "name": "@fsegurai/ngx-codemirror",
  "standalone": true,
  "features": ["forms", "themes", "diff"]
}
`,
  HTML: `<main>
  <h1>Hello</h1>
  <p class="lead">Rendered by <strong>CodeMirror</strong>.</p>
</main>
`,
  Markdown: `# Notes

- Two-way binding with \`[(value)]\`
- Languages loaded on demand
`,
};

// A component without decorators: Component(...) is applied to a plain class.
const App = Component({
  selector: 'app-root',
  imports: [CodeEditorComponent],
  template: `
    <header class="toolbar">
      <label>
        Language
        <select (change)="changeLanguage($any($event.target).value)">
          @for (name of names; track name) {
            <option [value]="name" [selected]="name === language()">{{ name }}</option>
          }
        </select>
      </label>
      <button type="button" (click)="reset(editor)">Reset</button>
      <button type="button" (click)="editor.focus()">Focus</button>
    </header>

    <div class="layout">
      <ngx-code-editor
        #editor
        [(value)]="code"
        [language]="language()"
        [languages]="languages"
        [lineWrapping]="true"
        placeholder="Type some code"
        (valueChange)="edits.set(edits() + 1)"
        (ready)="log('ready: editor created')"
        (error)="warn($event.message)" />

      <aside class="output">
        <h2>Live value</h2>
        <p class="stats">{{ stats() }} &middot; {{ edits() }} edit(s)</p>
        <pre>{{ code() }}</pre>
      </aside>
    </div>
  `,
})(
  class {
    languages = languages;
    names = Object.keys(SNIPPETS);
    language = signal('JavaScript');
    // [(value)] writes user edits back into this signal.
    code = signal(SNIPPETS.JavaScript);
    stats = computed(() => `${this.code().split('\n').length} lines, ${this.code().length} chars`);
    edits = signal(0);

    // setValue() replaces the document and emits valueChange once, like a user edit.
    reset(editor) {
      editor.setValue(SNIPPETS[this.language()]);
      this.edits.set(0);
    }

    changeLanguage(name) {
      this.language.set(name);
      // Writes from the parent do not emit valueChange.
      this.code.set(SNIPPETS[name]);
      this.edits.set(0);
    }

    log(message) {
      console.log(message);
    }

    // Library errors (unknown language, failed lazy load) arrive as CodeEditorError values.
    warn(message) {
      console.warn(message);
    }
  },
);

bootstrapApplication(App, {
  providers: [
    provideZonelessChangeDetection(),
    provideCodeEditor(
      { theme: THEME },
      withThemes({
        'github-light': () => import('@fsegurai/codemirror-theme-github-light').then((m) => m.githubLight),
        'tokyo-night-storm': () =>
          import('@fsegurai/codemirror-theme-tokyo-night-storm').then((m) => m.tokyoNightStorm),
      }),
    ),
  ],
}).then(() => console.log('ngx-codemirror editor-binding ready'));
