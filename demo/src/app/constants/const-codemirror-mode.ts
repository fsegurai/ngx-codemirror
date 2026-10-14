/** The editor a playground mode shows. */
export type PlaygroundMode = 'editor' | 'diff' | 'unified-diff';

/** The modes of the playground, in the order of the mode toggle. */
export const PLAYGROUND_MODES: readonly { readonly value: PlaygroundMode; readonly viewValue: string }[] = [
  { value: 'editor', viewValue: 'Editor' },
  { value: 'diff', viewValue: 'Split diff' },
  { value: 'unified-diff', viewValue: 'Unified diff' },
];
