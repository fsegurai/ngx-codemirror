import { Clipboard } from '@angular/cdk/clipboard';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ChangeDetectionStrategy, Component, input, provideZonelessChangeDetection } from '@angular/core';
import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideRouter } from '@angular/router';
import { DEMO_PRESETS } from '@app/constants/const-codemirror-extensions';
import { bundleThemeLoaders, DARK_EDITOR_THEME, LIGHT_EDITOR_THEME } from '@app/constants/const-codemirror-themes';
import { ScrollspyNavLayoutComponent } from '@shared/scrollspy-nav-layout';
import { provideCodeEditor, withExtensionPresets, withThemes } from 'ngx-codemirror';
import { EVENT_LOG_SIZE } from './event-log.store';
import PlaygroundComponent from './playground.component';
import { GENERIC_SAMPLE } from './playground-samples';
import { PLAYGROUND_STORAGE_KEY } from './playground-state.service';

/** The page layout without its Markdown footer, which needs the Markdown providers and globals. */
@Component({
  selector: 'app-scrollspy-nav-layout',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class LayoutStub {
  readonly displayTOC = input(true);
}

const TEXT = { headers: { 'content-type': 'text/plain' } };
const JAVASCRIPT = 'const answer = 42;\nconsole.log(answer);\nexport { answer };\n// end';
const PYTHON = 'answer = 42\nprint(answer)\n\n# end';

interface Page {
  fixture: ComponentFixture<PlaygroundComponent>;
  // biome-ignore lint/suspicious/noExplicitAny: drives the protected handlers and signals the template binds to
  component: any;
  element: HTMLElement;
  http: HttpTestingController;
}

async function settle(fixture: ComponentFixture<unknown>): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve));
  await fixture.whenStable();
}

async function render(): Promise<Page> {
  TestBed.configureTestingModule({
    providers: [
      provideZonelessChangeDetection(),
      provideHttpClient(),
      provideHttpClientTesting(),
      provideRouter([]),
      provideCodeEditor(
        { theme: 'auto' },
        withThemes(bundleThemeLoaders(), { light: LIGHT_EDITOR_THEME, dark: DARK_EDITOR_THEME }),
        withExtensionPresets(DEMO_PRESETS),
      ),
    ],
  });
  TestBed.overrideComponent(PlaygroundComponent, {
    remove: { imports: [ScrollspyNavLayoutComponent] },
    add: { imports: [LayoutStub] },
  });

  const fixture = TestBed.createComponent(PlaygroundComponent);
  const http = TestBed.inject(HttpTestingController);
  await settle(fixture);
  http.expectOne('lang_samples/javascript.txt').flush(JAVASCRIPT, TEXT);
  await settle(fixture);
  return { fixture, component: fixture.componentInstance, element: fixture.nativeElement, http };
}

function panelTitles(element: HTMLElement): string[] {
  return [...element.querySelectorAll('mat-panel-title')].map((title) => title.textContent?.trim() ?? '');
}

function toggleLabels(element: HTMLElement): string[] {
  return [...element.querySelectorAll('app-options-panel mat-slide-toggle')].map(
    (toggle) => toggle.textContent?.trim() ?? '',
  );
}

describe('PlaygroundComponent', () => {
  beforeAll(() => {
    // jsdom does not implement the layout APIs CodeMirror measures selections with.
    Range.prototype.getBoundingClientRect ??= (): DOMRect => new DOMRect();
    Range.prototype.getClientRects ??= (): DOMRectList => [] as unknown as DOMRectList;
  });

  beforeEach(() => localStorage.removeItem(PLAYGROUND_STORAGE_KEY));

  afterEach(() => TestBed.inject(MatSnackBar).dismiss());

  it('loads the sample of the default language into the editor', async () => {
    const { element, component } = await render();

    expect(component.editorModel().code).toBe(JAVASCRIPT);
    expect(element.querySelector('app-editor-mode .cm-content')?.textContent).toContain('const answer = 42;');
    expect(component.diffValue().original).toBe(JAVASCRIPT);
  });

  it('shows only the editor and the options of the current mode', async () => {
    const { fixture, element, component } = await render();

    expect(panelTitles(element)).toEqual(['Behaviour', 'Formatting', 'Extensions', 'Advanced']);
    expect(toggleLabels(element)).toContain('Focus when created');
    expect(element.querySelector('app-chunk-navigator')).toBeNull();

    component.onMode('diff');
    await settle(fixture);
    expect(element.querySelector('app-split-diff-mode')).not.toBeNull();
    expect(element.querySelector('app-editor-mode')).toBeNull();
    expect(panelTitles(element)).toEqual(['Behaviour', 'Formatting', 'Extensions', 'Diff', 'Advanced']);
    expect(toggleLabels(element)).toEqual(expect.arrayContaining(['Original read-only', 'Collapse unchanged lines']));
    expect(toggleLabels(element)).not.toContain('Accept/reject buttons');
    expect(toggleLabels(element)).not.toContain('Focus when created');
    expect(element.querySelector('app-chunk-navigator')?.textContent).toMatch(/change/i);

    component.onMode('unified-diff');
    await settle(fixture);
    expect(element.querySelector('app-unified-diff-mode')).not.toBeNull();
    expect(toggleLabels(element)).toEqual(expect.arrayContaining(['Accept/reject buttons', 'Inline changes']));
    expect(toggleLabels(element)).not.toContain('Original read-only');
  });

  it('replaces the edited sample on a language switch, and Undo restores the edit', async () => {
    const { fixture, component, http } = await render();
    component.editorModel.set({ code: 'my edit' });

    component.onLanguage('Python');
    await settle(fixture);
    http.expectOne('lang_samples/python.txt').flush(PYTHON, TEXT);
    await settle(fixture);
    expect(component.editorModel().code).toBe(PYTHON);

    const snackBar = TestBed.inject(MatSnackBar)._openedSnackBarRef;
    expect(snackBar?.instance.data).toEqual({ message: 'Loaded the Python sample', action: 'Undo' });
    snackBar?.dismissWithAction();
    await settle(fixture);
    expect(component.editorModel().code).toBe('my edit');
  });

  it('switches without offering Undo when the sample was not edited', async () => {
    const { fixture, component, http } = await render();

    component.onLanguage('Python');
    await settle(fixture);
    http.expectOne('lang_samples/python.txt').flush(PYTHON, TEXT);
    await settle(fixture);

    expect(component.editorModel().code).toBe(PYTHON);
    expect(TestBed.inject(MatSnackBar)._openedSnackBarRef).toBeNull();
  });

  it('falls back to the generic sample for a language without a sample file', async () => {
    const { fixture, component, http, element } = await render();

    component.onLanguage('Jinja');
    await settle(fixture);
    http.expectOne('lang_samples/jinja.txt').flush('Not found', { status: 404, statusText: 'Not Found' });
    await settle(fixture);

    expect(component.editorModel().code).toBe(GENERIC_SAMPLE);
    expect(element.querySelector('app-event-log .entry.failed')?.textContent).toContain('No sample for Jinja');
  });

  it('ignores the sample of a language switched away from before it arrived', async () => {
    const { fixture, component, http } = await render();

    component.onLanguage('Python');
    await settle(fixture);
    const python = http.expectOne('lang_samples/python.txt');
    component.onLanguage('Rust');
    await settle(fixture);

    expect(python.cancelled).toBe(true);
    http.expectOne('lang_samples/rust.txt').flush('fn main() {}', TEXT);
    await settle(fixture);
    expect(component.editorModel().code).toBe('fn main() {}');
  });

  it('caps the event log, styles failed events and clears it', async () => {
    const { fixture, component, element } = await render();

    for (let i = 0; i < EVENT_LOG_SIZE + 10; i++) component.log.log('focused', `#${i}`);
    component.onEditorEvent({ name: 'error', detail: 'invalid-theme: no such theme', failed: true });
    await settle(fixture);

    expect(element.querySelectorAll('app-event-log .entry').length).toBe(EVENT_LOG_SIZE);
    expect(element.querySelector('app-event-log .entry.failed')?.textContent).toContain('invalid-theme');

    const clear = [...element.querySelectorAll<HTMLButtonElement>('app-event-log button')].find(
      (button) => button.textContent?.trim() === 'Clear',
    );
    clear?.click();
    await settle(fixture);
    expect(element.querySelectorAll('app-event-log .entry').length).toBe(0);
  });

  it('copies a snippet with only the bindings that differ from the defaults', async () => {
    const { component } = await render();
    const copy = vi.spyOn(TestBed.inject(Clipboard), 'copy').mockReturnValue(true);

    component.patch({ lineWrapping: true, tabSize: 2 });
    component.copySnippet();

    const snippet: string = copy.mock.calls[0][0];
    expect(snippet).toContain('<ngx-code-editor');
    expect(snippet).toContain('[lineWrapping]="true"');
    expect(snippet).toContain('[tabSize]="2"');
    expect(snippet).not.toContain('lineNumbers');
    expect(snippet).not.toContain('theme=');
  });

  it('resets the options, and the edited sample with an Undo', async () => {
    const { fixture, component } = await render();
    component.patch({ readonly: true, lint: true });
    component.editorModel.set({ code: 'my edit' });

    component.reset();
    await settle(fixture);

    expect(component.state.changed()).toEqual([]);
    expect(component.editorModel().code).toBe(JAVASCRIPT);
    TestBed.inject(MatSnackBar)._openedSnackBarRef?.dismissWithAction();
    expect(component.editorModel().code).toBe('my edit');
  });

  it('toggles the fullscreen editor, and Escape leaves it', async () => {
    const { fixture, component, element } = await render();

    component.toggleFullscreen();
    await settle(fixture);
    expect(element.querySelector('.editor-frame')?.classList).toContain('fullscreen');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await settle(fixture);
    expect(element.querySelector('.editor-frame')?.classList).not.toContain('fullscreen');
  });
});
