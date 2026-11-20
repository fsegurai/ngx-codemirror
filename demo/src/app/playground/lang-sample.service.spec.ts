import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LangSampleService } from './lang-sample.service';
import { GENERIC_SAMPLE } from './playground-samples';

const TEXT = { headers: { 'content-type': 'text/plain' } };

describe('LangSampleService', () => {
  let service: LangSampleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting(), LangSampleService],
    });
    service = TestBed.inject(LangSampleService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('loads the sample of a language, with Windows line endings normalized', async () => {
    const sample = service.load('JavaScript');
    expect(service.loading()).toBe(true);

    http.expectOne('lang_samples/javascript.txt').flush('let a;\r\nlet b;', TEXT);

    await expect(sample).resolves.toEqual({ language: 'JavaScript', text: 'let a;\nlet b;', fallback: false });
    expect(service.loading()).toBe(false);
    expect(service.error()).toBeNull();
  });

  it('replaces every space and # of the name in the file name', () => {
    void service.load('Closure Stylesheets (GSS)');
    http.expectOne('lang_samples/closure_stylesheets_(gss).txt').flush('', TEXT);

    void service.load('C#');
    http.expectOne('lang_samples/csharp.txt').flush('', TEXT);
  });

  it('falls back to the generic sample when the language has no sample file', async () => {
    const sample = service.load('Jinja');
    http.expectOne('lang_samples/jinja.txt').flush('Not found', { status: 404, statusText: 'Not Found' });

    await expect(sample).resolves.toEqual({ language: 'Jinja', text: GENERIC_SAMPLE, fallback: true });
    expect(service.error()).toBe('No sample for Jinja: HTTP 404');
  });

  it('falls back to the generic sample when a dev server answers with the app page', async () => {
    const sample = service.load('Jinja');
    http
      .expectOne('lang_samples/jinja.txt')
      .flush('<!doctype html><app-root></app-root>', { headers: { 'content-type': 'text/html' } });

    await expect(sample).resolves.toEqual(expect.objectContaining({ fallback: true, text: GENERIC_SAMPLE }));
  });

  it('cancels a pending request and ignores its response when a later language is loaded', async () => {
    const stale = service.load('Python');
    const pythonRequest = http.expectOne('lang_samples/python.txt');
    const latest = service.load('Rust');

    expect(pythonRequest.cancelled).toBe(true);
    await expect(stale).resolves.toBeNull();

    http.expectOne('lang_samples/rust.txt').flush('fn main() {}', TEXT);
    await expect(latest).resolves.toEqual({ language: 'Rust', text: 'fn main() {}', fallback: false });
    expect(service.loading()).toBe(false);
  });
});
