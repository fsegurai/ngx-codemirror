/**
 * Debounce function to avoid multiple calls to the same function
 * @param func - Function to be debounced
 * @param delay - Delay in milliseconds
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce(func: Function, delay: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let debounceTimer: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    clearTimeout(debounceTimer);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-argument
    debounceTimer = setTimeout(() => func(...args), delay);
  };
}
