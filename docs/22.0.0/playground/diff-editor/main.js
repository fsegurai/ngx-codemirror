// The compiler must load first: this sample has no build step, so Angular compiles templates in the browser (JIT).
import '@angular/compiler';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { languages } from '@codemirror/language-data';
import { CodeDiffEditorComponent, provideCodeEditor, withThemes } from '@fsegurai/ngx-codemirror';

// The preview follows the app theme: <html data-theme="light|dark">. Both sides start on a full theme of that scheme
// (syntax colors included), registered lazily below.
const THEME = document.documentElement.dataset.theme === 'dark' ? 'tokyo-night-storm' : 'github-light';

const ORIGINAL = `import { fetchUser } from './api';

export async function loadProfile(id) {
  const user = await fetchUser(id);
  if (!user) {
    return null;
  }

  const name = user.firstName + ' ' + user.lastName;
  const avatar = user.avatar || '/img/default.png';

  // Unchanged helper code, collapsed when "collapse unchanged" is on.
  const joined = new Date(user.createdAt);
  const year = joined.getFullYear();
  const badge = year < 2020 ? 'veteran' : 'member';

  return { name, avatar, badge };
}
`;

const MODIFIED = `import { fetchUser } from './api';

export async function loadProfile(id: string): Promise<Profile | null> {
  const user = await fetchUser(id);
  if (!user) return null;

  const name = \`\${user.firstName} \${user.lastName}\`;
  const avatar = user.avatar ?? '/img/default.png';

  // Unchanged helper code, collapsed when "collapse unchanged" is on.
  const joined = new Date(user.createdAt);
  const year = joined.getFullYear();
  const badge = year < 2020 ? 'veteran' : 'member';

  return { name, avatar, badge, updatedAt: Date.now() };
}
`;

const App = Component({
  selector: 'app-root',
  imports: [CodeDiffEditorComponent],
  template: `
    <header class="toolbar">
      <button type="button" (click)="move(diff, -1)">&uarr; Previous change</button>
      <button type="button" (click)="move(diff, 1)">&darr; Next change</button>
      <span class="badge">{{ chunks() }} changed chunk(s)</span>
      <label><input type="checkbox" [checked]="collapse()" (change)="collapse.set(!collapse())" /> Collapse unchanged</label>
      <label><input type="checkbox" [checked]="swapped()" (change)="swapped.set(!swapped())" /> Modified first</label>
      <button type="button" (click)="reset(diff)">Reset</button>
    </header>

    <div class="sides">
      <span>{{ swapped() ? 'Modified' : 'Original (read-only)' }}</span>
      <span>{{ swapped() ? 'Original (read-only)' : 'Modified' }}</span>
    </div>

    <!-- Editor a is the original document, editor b the modified one. -->
    <ngx-code-diff-editor
      #diff
      [(value)]="model"
      language="typescript"
      [languages]="languages"
      [originalReadonly]="true"
      revertControls="a-to-b"
      [orientation]="swapped() ? 'b-a' : 'a-b'"
      [collapseUnchanged]="collapse() ? collapseOptions : undefined"
      (valueChange)="countChunks(diff)"
      (ready)="onReady(diff)"
      (error)="warn($event.message)" />

    <p class="hint">
      Edit the modified side or use the arrows between the editors to copy a chunk from the original.
      Modified side: {{ model().modified.split('\\n').length }} lines.
    </p>
  `,
})(
  class {
    languages = languages;
    // [(value)] keeps both documents in one { original, modified } signal.
    model = signal({ original: ORIGINAL, modified: MODIFIED });
    chunks = signal(0);
    collapse = signal(false);
    swapped = signal(false);
    collapseOptions = { margin: 2, minSize: 4 };

    onReady(diff) {
      this.countChunks(diff);
      console.log(`ready: merge view created with ${diff.getChunks().length} chunk(s)`);
    }

    // getChunks() reads the merge view's current chunks.
    countChunks(diff) {
      // Let the merge view recompute its chunks after the edit first.
      queueMicrotask(() => this.chunks.set(diff.getChunks().length));
    }

    // goToNextChunk() / goToPreviousChunk() move the modified side's selection and report if there was a chunk.
    move(diff, direction) {
      const moved = direction > 0 ? diff.goToNextChunk() : diff.goToPreviousChunk();
      if (!moved) console.log('no more changes in that direction');
    }

    // setValue() replaces both documents and emits valueChange once.
    reset(diff) {
      diff.setValue({ original: ORIGINAL, modified: MODIFIED });
    }

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
}).then(() => console.log('ngx-codemirror diff-editor ready'));
