import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable, inject, type Signal, signal } from '@angular/core';
import { langSampleFile } from '@app/constants/const-codemirror-languages';
import type { Subscription } from 'rxjs';
import { GENERIC_SAMPLE } from './playground-samples';

/** A loaded language sample. */
export interface LangSample {
  readonly language: string;
  readonly text: string;
  /** Whether the language has no sample file and `text` is the generic sample. */
  readonly fallback: boolean;
}

/**
 * Loads the sample of a language from `lang_samples/`. Only the latest request counts: a new `load()` cancels the
 * pending one, whose promise then resolves to `null`. A language without a sample file (or a failed request) gets
 * the generic sample.
 */
@Injectable()
export class LangSampleService {
  private readonly http = inject(HttpClient);

  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private pending: { subscription: Subscription; settle: (sample: LangSample | null) => void } | null = null;

  /** Whether a sample is being loaded. */
  readonly loading: Signal<boolean> = this._loading.asReadonly();

  /** Why the latest sample could not be loaded; `null` when it was. */
  readonly error: Signal<string | null> = this._error.asReadonly();

  constructor() {
    inject(DestroyRef).onDestroy(() => this.cancel());
  }

  /**
   * Loads the sample of a language, cancelling the pending request.
   *
   * @param language The language name.
   * @returns The sample, or `null` when a later `load()` superseded this one.
   */
  load(language: string): Promise<LangSample | null> {
    this.cancel();
    this._loading.set(true);

    return new Promise<LangSample | null>((resolve) => {
      const settle = (sample: LangSample | null): void => {
        this.pending = null;
        resolve(sample);
      };
      const done = (sample: LangSample, error: string | null): void => {
        this._loading.set(false);
        this._error.set(error);
        settle(sample);
      };

      const fallback = (reason: string): void =>
        done({ language, text: GENERIC_SAMPLE, fallback: true }, `No sample for ${language}: ${reason}`);
      const url = `lang_samples/${langSampleFile(language)}`;
      const subscription = this.http.get(url, { responseType: 'text', observe: 'response' }).subscribe({
        next: (response) => {
          // A dev server answers a missing file with the app's index.html: the sample files are plain text.
          if (response.headers.get('content-type')?.includes('text/html')) {
            fallback('not found');
          } else {
            done({ language, text: (response.body ?? '').replaceAll('\r\n', '\n'), fallback: false }, null);
          }
        },
        error: (error: unknown) => fallback(describe(error)),
      });
      // A synchronous response (a test backend) already settled the promise.
      if (this._loading()) this.pending = { subscription, settle };
    });
  }

  /** Cancels the pending request; its promise resolves to `null`. */
  private cancel(): void {
    const pending = this.pending;
    if (!pending) return;
    pending.subscription.unsubscribe();
    pending.settle(null);
    this._loading.set(false);
  }
}

function describe(error: unknown): string {
  if (error !== null && typeof error === 'object' && 'status' in error && typeof error.status === 'number') {
    return error.status ? `HTTP ${error.status}` : 'network error';
  }
  return String(error);
}
