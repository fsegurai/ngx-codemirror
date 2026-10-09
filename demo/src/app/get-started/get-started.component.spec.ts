import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { appConfig } from '@app/app.config';
import { MarkdownService } from '@fsegurai/ngx-markdown';
import { HttpRawLoaderService } from '@shared/http-raw-loader';
import { type Observable, of, throwError } from 'rxjs';
import GetStartedComponent from './get-started.component';

const README = [
  '<p align="center" class="intro">logo</p>',
  '',
  'Intro paragraph.',
  '',
  '### Table of contents',
  '',
  '- [Installation](#installation)',
  '',
  '## Installation',
  '',
  'Install it.',
  '',
  '## Usage',
  '',
  'Use it.',
].join('\n');

const FALLBACK_TEXT = 'The README could not be loaded.';

function setup(readme$: Observable<string>) {
  // The page renders with [emoji]; Emoji-Toolkit is a global script in the app build, not loaded in tests
  vi.stubGlobal('joypixels', { shortnameToUnicode: (markdown: string) => markdown });
  TestBed.configureTestingModule({
    providers: [...appConfig.providers, { provide: HttpRawLoaderService, useValue: { get: () => readme$ } }],
  });
}

async function render() {
  const fixture = TestBed.createComponent(GetStartedComponent);
  await TestBed.inject(ApplicationRef).whenStable();
  await fixture.whenStable();
  const markdown: HTMLElement = fixture.nativeElement.querySelector('ngx-markdown');
  // biome-ignore lint/complexity/useLiteralKeys: reads the protected signal the template binds to the side navigation
  const headings = () => fixture.componentInstance['headings']();
  return { markdown, headings };
}

describe('GetStartedComponent', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('renders the prepared README and builds the side navigation from its h2 headings', async () => {
    setup(of(README));
    const { markdown, headings } = await render();

    expect(markdown.textContent).toContain('Intro paragraph.');
    expect(markdown.textContent).not.toContain('Table of contents');
    expect(markdown.querySelector('.intro')).toBeNull();
    expect(headings()?.map((h: Element) => h.id)).toEqual(['installation', 'usage']);
  });

  it('logs a failed README fetch and renders the fallback message', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    setup(throwError(() => new Error('404')));
    const { markdown } = await render();

    expect(markdown.textContent).toContain(FALLBACK_TEXT);
    expect(markdown.querySelector('a')?.getAttribute('href')).toBe('https://github.com/fsegurai/ngx-codemirror#readme');
    expect(consoleError).toHaveBeenCalledWith('Failed to load the README', expect.any(Error));
  });

  it('renders the fallback message when the README is empty', async () => {
    setup(of('  \n'));
    const { markdown } = await render();

    expect(markdown.textContent).toContain(FALLBACK_TEXT);
  });

  it('still builds the side navigation when the post-render processing fails', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    setup(of(README));
    vi.spyOn(TestBed.inject(MarkdownService), 'render').mockImplementation(() => {
      throw new Error('highlight failed');
    });
    const { headings } = await render();

    expect(consoleError).toHaveBeenCalledWith('Failed to render the README', expect.any(Error));
    expect(headings()?.map((h: Element) => h.id)).toEqual(['installation', 'usage']);
  });
});
