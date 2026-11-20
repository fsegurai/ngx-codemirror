import { DestroyRef, Injectable, inject, type Signal, signal } from '@angular/core';
import { type Debounced, debounce } from '@shared/debounce';
import type { LogEntry } from './playground.models';

/** How many entries the event log keeps. */
export const EVENT_LOG_SIZE = 100;

/** How long a burst of the same debounced event (typing) is merged into one entry. */
export const EVENT_LOG_DEBOUNCE_MS = 300;

/** The event log of the playground, most recent first. Provided by the playground component. */
@Injectable()
export class EventLogStore {
  private readonly _entries = signal<readonly LogEntry[]>([]);
  private readonly debounced = new Map<string, Debounced<[string, boolean]>>();
  private nextId = 0;

  /** The entries, most recent first, at most `EVENT_LOG_SIZE`. */
  readonly entries: Signal<readonly LogEntry[]> = this._entries.asReadonly();

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      for (const pending of this.debounced.values()) pending.cancel();
    });
  }

  /** Adds an entry at the top of the log, dropping the oldest beyond `EVENT_LOG_SIZE`. */
  log(name: string, detail: string, failed = false): void {
    const entry: LogEntry = { id: ++this.nextId, time: timeOf(new Date()), name, detail, failed };
    this._entries.update((entries) => [entry, ...entries].slice(0, EVENT_LOG_SIZE));
  }

  /** Adds an entry once `name` was quiet for `EVENT_LOG_DEBOUNCE_MS`, with the latest detail (typing bursts). */
  logDebounced(name: string, detail: string, failed = false): void {
    let pending = this.debounced.get(name);
    if (!pending) {
      pending = debounce(
        (latest: string, latestFailed: boolean) => this.log(name, latest, latestFailed),
        EVENT_LOG_DEBOUNCE_MS,
      );
      this.debounced.set(name, pending);
    }
    pending(detail, failed);
  }

  /** Empties the log, dropping the pending debounced entries too. */
  clear(): void {
    for (const pending of this.debounced.values()) pending.cancel();
    this._entries.set([]);
  }
}

function timeOf(date: Date): string {
  const pad = (value: number, length = 2): string => String(value).padStart(length, '0');
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad(date.getMilliseconds(), 3)}`;
}
