import { ApplicationRef, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { DEMO_LINT } from '@app/constants/const-codemirror-extensions';
import { DEFAULT_OPTIONS } from './playground.models';
import { PLAYGROUND_STORAGE_KEY, PlaygroundStateService } from './playground-state.service';

async function setup(url = '/'): Promise<Router> {
  TestBed.configureTestingModule({
    providers: [provideZonelessChangeDetection(), provideRouter([]), PlaygroundStateService],
  });
  const router = TestBed.inject(Router);
  await router.navigateByUrl(url);
  return router;
}

/** Runs the sync effect and waits for its URL navigation. */
async function settle(): Promise<void> {
  TestBed.tick();
  await TestBed.inject(ApplicationRef).whenStable();
}

function stored(): unknown {
  return JSON.parse(localStorage.getItem(PLAYGROUND_STORAGE_KEY) ?? 'null');
}

describe('PlaygroundStateService', () => {
  beforeEach(() => localStorage.clear());

  it('starts from the defaults without URL params or stored options', async () => {
    await setup();
    const state = TestBed.inject(PlaygroundStateService);

    expect(state.options()).toEqual(DEFAULT_OPTIONS);
    expect(state.changed()).toEqual([]);
  });

  it('keeps patched options in localStorage and the non-default ones in the URL', async () => {
    const router = await setup();
    const state = TestBed.inject(PlaygroundStateService);

    state.patch({ mode: 'diff', tabSize: 2, presets: ['emacs-keys'], lineNumbers: false });
    await settle();

    expect(stored()).toEqual(expect.objectContaining({ mode: 'diff', tabSize: 2, presets: ['emacs-keys'] }));
    const params = router.parseUrl(router.url).queryParams;
    expect(params).toEqual({ mode: 'diff', tabSize: '2', presets: 'emacs-keys', lineNumbers: 'false' });
    expect(state.changed().map((entry) => entry.key)).toEqual(['mode', 'tabSize', 'lineNumbers', 'presets']);
  });

  it('restores the options from the URL, ignoring unknown keys and invalid values', async () => {
    await setup('/?mode=unified-diff&tabSize=2&indentUnit=0&lineNumbers=maybe&setup=none&language=Python&bogus=1');
    const state = TestBed.inject(PlaygroundStateService);

    expect(state.options()).toEqual({
      ...DEFAULT_OPTIONS,
      mode: 'unified-diff',
      tabSize: 2,
      setup: 'none',
      language: 'Python',
    });
    expect(state.common().setup).toBeNull();
  });

  it('keeps an unregistered theme name from the URL, so the editor reports it', async () => {
    await setup('/?theme=no-such-theme');

    expect(TestBed.inject(PlaygroundStateService).common().theme).toBe('no-such-theme');
  });

  it('restores the options from localStorage when the URL has none', async () => {
    localStorage.setItem(PLAYGROUND_STORAGE_KEY, JSON.stringify({ ...DEFAULT_OPTIONS, lint: true, theme: 'nord' }));
    await setup();
    const state = TestBed.inject(PlaygroundStateService);

    expect(state.options()).toEqual({ ...DEFAULT_OPTIONS, lint: true, theme: 'nord' });
    expect(state.common().lint).toBe(DEMO_LINT);
  });

  it('prefers the URL over localStorage', async () => {
    localStorage.setItem(PLAYGROUND_STORAGE_KEY, JSON.stringify({ ...DEFAULT_OPTIONS, lint: true }));
    await setup('/?readonly=true');

    expect(TestBed.inject(PlaygroundStateService).options()).toEqual({ ...DEFAULT_OPTIONS, readonly: true });
  });

  it('starts from the defaults when the stored options are corrupt', async () => {
    localStorage.setItem(PLAYGROUND_STORAGE_KEY, '{not json');
    await setup();

    expect(TestBed.inject(PlaygroundStateService).options()).toEqual(DEFAULT_OPTIONS);
  });

  it('resets to the defaults and clears the URL', async () => {
    const router = await setup('/?mode=diff&gutter=false');
    const state = TestBed.inject(PlaygroundStateService);
    await settle();

    state.reset();
    await settle();

    expect(state.options()).toEqual(DEFAULT_OPTIONS);
    expect(router.url).toBe('/');
    expect(stored()).toEqual(DEFAULT_OPTIONS);
  });

  it('builds a share link that restores the same options', async () => {
    await setup();
    const state = TestBed.inject(PlaygroundStateService);
    state.patch({ mode: 'diff', orientation: 'b-a', collapseUnchanged: true });

    const link = new URL(state.shareUrl());
    expect(Object.fromEntries(link.searchParams)).toEqual({
      mode: 'diff',
      orientation: 'b-a',
      collapseUnchanged: 'true',
    });
    expect(state.diff().collapseUnchanged).toEqual({ margin: 3, minSize: 4 });
  });
});
