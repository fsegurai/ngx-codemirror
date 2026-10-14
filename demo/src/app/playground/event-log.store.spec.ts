import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EVENT_LOG_DEBOUNCE_MS, EVENT_LOG_SIZE, EventLogStore } from './event-log.store';

describe('EventLogStore', () => {
  let store: EventLogStore;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection(), EventLogStore] });
    store = TestBed.inject(EventLogStore);
  });

  afterEach(() => vi.useRealTimers());

  it('keeps the latest entries first, at most EVENT_LOG_SIZE', () => {
    for (let i = 1; i <= EVENT_LOG_SIZE + 5; i++) store.log('focused', `#${i}`);

    const entries = store.entries();
    expect(entries.length).toBe(EVENT_LOG_SIZE);
    expect(entries[0].detail).toBe(`#${EVENT_LOG_SIZE + 5}`);
    expect(entries.at(-1)?.detail).toBe('#6');
    expect(new Set(entries.map((entry) => entry.id)).size).toBe(EVENT_LOG_SIZE);
    expect(entries[0].time).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/);
  });

  it('records failed entries', () => {
    store.log('error', 'invalid-theme', true);

    expect(store.entries()[0]).toEqual(expect.objectContaining({ name: 'error', failed: true }));
  });

  it('merges a burst of debounced events into one entry with the latest detail', () => {
    vi.useFakeTimers();
    store.logDebounced('valueChange', '1 characters');
    store.logDebounced('valueChange', '2 characters');
    store.logDebounced('valueChange', '3 characters');
    expect(store.entries()).toEqual([]);

    vi.advanceTimersByTime(EVENT_LOG_DEBOUNCE_MS);
    expect(store.entries().map((entry) => entry.detail)).toEqual(['3 characters']);
  });

  it('clears the entries and the pending debounced ones', () => {
    vi.useFakeTimers();
    store.log('focused', '');
    store.logDebounced('valueChange', '1 characters');

    store.clear();
    vi.advanceTimersByTime(EVENT_LOG_DEBOUNCE_MS);

    expect(store.entries()).toEqual([]);
  });
});
