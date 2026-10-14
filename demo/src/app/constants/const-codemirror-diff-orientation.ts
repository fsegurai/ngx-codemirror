import type { Orientation, RevertControls } from 'ngx-codemirror';

/** The options of the split diff orientation picker. */
export const DIFF_ORIENTATIONS: readonly { readonly value: Orientation; readonly viewValue: string }[] = [
  { value: 'a-b', viewValue: 'Original left, modified right' },
  { value: 'b-a', viewValue: 'Modified left, original right' },
];

/** A revert controls option: `'none'` stands for no `revertControls`, so it can live in a URL. */
export type RevertControlsOption = RevertControls | 'none';

/** The options of the split diff revert controls picker. */
export const DIFF_REVERT_CONTROLS: readonly { readonly value: RevertControlsOption; readonly viewValue: string }[] = [
  { value: 'none', viewValue: 'None' },
  { value: 'a-to-b', viewValue: 'Original → Modified (copy original over modified)' },
  { value: 'b-to-a', viewValue: 'Modified → Original (copy modified over original)' },
];

/** The `revertControls` input of a revert controls option. */
export function toRevertControls(option: RevertControlsOption): RevertControls | undefined {
  return option === 'none' ? undefined : option;
}
