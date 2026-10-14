import type { Setup } from 'ngx-codemirror';

/** A setup option of the playground: `'none'` stands for the `null` setup, so it can live in a URL. */
export type SetupOption = 'basic' | 'minimal' | 'none';

/** The options of the playground setup picker. */
export const SETUP_OPTIONS: readonly { readonly value: SetupOption; readonly viewValue: string }[] = [
  { value: 'basic', viewValue: 'Basic' },
  { value: 'minimal', viewValue: 'Minimal' },
  { value: 'none', viewValue: 'None' },
];

/** The `setup` input of a setup option. */
export function toSetup(option: SetupOption): Setup {
  return option === 'none' ? null : option;
}
