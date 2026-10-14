/** A debounced function, with a way to drop the pending call. */
export interface Debounced<A extends unknown[]> {
  (...args: A): void;
  /** Drops the pending call, if any. */
  cancel(): void;
}

/**
 * Delays calls to `func` until `delay` ms passed without a new call; only the latest arguments are used.
 *
 * @param func The function to debounce.
 * @param delay The quiet period in milliseconds.
 */
export function debounce<A extends unknown[]>(func: (...args: A) => void, delay: number): Debounced<A> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const debounced = (...args: A): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      func(...args);
    }, delay);
  };
  return Object.assign(debounced, {
    cancel: (): void => {
      clearTimeout(timer);
      timer = undefined;
    },
  });
}
