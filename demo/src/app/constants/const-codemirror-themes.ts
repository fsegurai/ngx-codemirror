import type { Extension } from '@codemirror/state';

/** The theme bundle module. Only imported lazily, so its themes stay out of the initial bundle. */
type ThemeBundle = typeof import('@fsegurai/codemirror-theme-bundle');

/** The merge (diff) colors of a bundle theme, applied with `applyMergeRevertStyles()`. */
type MergeRevertStyles = Parameters<ThemeBundle['applyMergeRevertStyles']>[0];

/** The bundle exports that are a theme with a matching `<key>MergeStyles` export. */
type BundleThemeKey =
  | 'abcdef'
  | 'abyss'
  | 'androidStudio'
  | 'andromeda'
  | 'basicLight'
  | 'basicDark'
  | 'catppuccinMocha'
  | 'cobalt2'
  | 'forest'
  | 'githubLight'
  | 'githubDark'
  | 'gruvboxLight'
  | 'gruvboxDark'
  | 'highContrastLight'
  | 'highContrastDark'
  | 'materialLight'
  | 'materialDark'
  | 'materialOcean'
  | 'monokai'
  | 'nord'
  | 'palenight'
  | 'solarizedLight'
  | 'solarizedDark'
  | 'synthwave84'
  | 'tokyoNightDay'
  | 'tokyoNightStorm'
  | 'volcano'
  | 'vsCodeLight'
  | 'vsCodeDark';

/** A theme of the bundle, registered by name with `withThemes()`. */
interface BundleTheme {
  /** The registered theme name, used as `theme="<name>"`. */
  readonly name: string;
  /** The label shown in the theme picker. */
  readonly viewValue: string;
  /** The export of the bundle. */
  readonly key: BundleThemeKey;
  /** Whether the theme has a dark background. */
  readonly dark: boolean;
}

/** One entry of the playground theme picker. */
export interface ThemeOption {
  readonly viewValue: string;
  /** The theme name; `''` lets the editor follow `CodeEditorThemeService` (the app light/dark toggle). */
  readonly value: string;
}

/** A group of the playground theme picker. */
export interface ThemeGroup {
  readonly label: string;
  readonly options: readonly ThemeOption[];
}

const loadBundle = (): Promise<ThemeBundle> => import('@fsegurai/codemirror-theme-bundle');

const theme = (key: BundleThemeKey, viewValue: string, dark: boolean): BundleTheme => ({
  name: key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
  viewValue,
  key,
  dark,
});

/** The bundle themes of the demo. */
export const BUNDLE_THEMES: readonly BundleTheme[] = [
  theme('abcdef', 'Abcdef', true),
  theme('abyss', 'Abyss', true),
  theme('androidStudio', 'Android Studio', true),
  theme('andromeda', 'Andromeda', true),
  theme('basicLight', 'Basic Light', false),
  theme('basicDark', 'Basic Dark', true),
  theme('catppuccinMocha', 'Catppuccin Mocha', true),
  theme('cobalt2', 'Cobalt2', true),
  theme('forest', 'Forest', true),
  theme('githubLight', 'GitHub Light', false),
  theme('githubDark', 'GitHub Dark', true),
  theme('gruvboxLight', 'Gruvbox Light', false),
  theme('gruvboxDark', 'Gruvbox Dark', true),
  theme('highContrastLight', 'High Contrast Light', false),
  theme('highContrastDark', 'High Contrast Dark', true),
  theme('materialLight', 'Material Light', false),
  theme('materialDark', 'Material Dark', true),
  theme('materialOcean', 'Material Ocean', true),
  theme('monokai', 'Monokai', true),
  theme('nord', 'Nord', true),
  theme('palenight', 'Palenight', true),
  theme('solarizedLight', 'Solarized Light', false),
  theme('solarizedDark', 'Solarized Dark', true),
  theme('synthwave84', 'Synthwave 84', true),
  theme('tokyoNightDay', 'Tokyo Night Day', false),
  theme('tokyoNightStorm', 'Tokyo Night Storm', true),
  theme('volcano', 'Volcano', true),
  theme('vsCodeLight', 'VS Code Light', false),
  theme('vsCodeDark', 'VS Code Dark', true),
];

/** The theme the editors use with the light app theme, and for `'auto'` in a light color scheme. */
export const LIGHT_EDITOR_THEME = 'github-light';

/** The theme the editors use with the dark app theme, and for `'auto'` in a dark color scheme. */
export const DARK_EDITOR_THEME = 'github-dark';

/**
 * The bundle themes as lazy themes for `withThemes()`: the bundle is loaded the first time an editor uses one of
 * them, and every theme is then served from the library's load cache.
 */
export function bundleThemeLoaders(): Record<string, () => Promise<Extension>> {
  return Object.fromEntries(
    BUNDLE_THEMES.map((entry) => [entry.name, () => loadBundle().then((bundle) => bundle[entry.key])]),
  );
}

/** The options of the playground theme picker, grouped: built-in, then the light and dark bundle themes. */
export const THEME_GROUPS: readonly ThemeGroup[] = [
  {
    label: 'Built-in',
    options: [
      { viewValue: 'Follow the app theme', value: '' },
      { viewValue: 'Auto (system preference)', value: 'auto' },
      { viewValue: 'Light', value: 'light' },
      { viewValue: 'Dark', value: 'dark' },
    ],
  },
  {
    label: 'Light',
    options: BUNDLE_THEMES.filter((entry) => !entry.dark).map(({ viewValue, name }) => ({ viewValue, value: name })),
  },
  {
    label: 'Dark',
    options: BUNDLE_THEMES.filter((entry) => entry.dark).map(({ viewValue, name }) => ({ viewValue, value: name })),
  },
];

/** Every option of the theme picker. */
export const THEME_OPTIONS: readonly ThemeOption[] = THEME_GROUPS.flatMap((group) => group.options);

/** Merge colors for a light theme without merge styles of its own. */
const DEFAULT_MERGE_STYLES: MergeRevertStyles = {
  backgroundColor: '#f0f0f0',
  borderColor: '#ccc',
  buttonColor: '#333',
  buttonHoverColor: '#ddd',
};

/** Merge colors for a dark theme without merge styles of its own. */
const DEFAULT_DARK_MERGE_STYLES: MergeRevertStyles = {
  backgroundColor: '#2b2b2b',
  borderColor: '#555',
  buttonColor: '#ddd',
  buttonHoverColor: '#444',
};

let mergeStylesRequest = 0;

/**
 * Applies the merge (diff) colors of a theme to the page. The built-in `'light'`/`'dark'`/`'auto'` names map to the
 * light/dark bundle themes; any other name without merge styles gets neutral colors, dark ones when `dark` is set.
 * The latest call wins.
 *
 * @param name The theme name the editors use.
 * @param dark Whether the neutral colors must suit a dark background (the app's dark theme).
 * @returns Whether these colors were applied, `false` when a later call superseded this one.
 */
export async function applyThemeMergeStyles(name: string | undefined, dark = false): Promise<boolean> {
  const request = ++mergeStylesRequest;
  const entry = BUNDLE_THEMES.find((candidate) => candidate.name === bundleThemeName(name));
  const bundle = await loadBundle();
  if (request !== mergeStylesRequest) return false;

  const fallback = dark ? DEFAULT_DARK_MERGE_STYLES : DEFAULT_MERGE_STYLES;
  bundle.applyMergeRevertStyles(entry ? bundle[`${entry.key}MergeStyles` as const] : fallback);
  return true;
}

function bundleThemeName(name: string | undefined): string | undefined {
  switch (name) {
    case 'light':
      return LIGHT_EDITOR_THEME;
    case 'dark':
      return DARK_EDITOR_THEME;
    case 'auto':
      return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ? DARK_EDITOR_THEME : LIGHT_EDITOR_THEME;
    default:
      return name;
  }
}
