import { languages } from '@codemirror/language-data';

/** One entry of the playground language picker. */
export interface LanguageOption {
  /** The language name, used as the editor's `language` input. */
  readonly name: string;
  /** The file extensions of the language, without the dot; empty for plain text. */
  readonly extensions: readonly string[];
}

/** The languages of the picker: every language-data entry plus plain text, by name. */
export const LANGUAGE_OPTIONS: readonly LanguageOption[] = languages
  .map((lang): LanguageOption => ({ name: lang.name, extensions: lang.extensions }))
  .concat([{ name: 'Plain Text', extensions: ['txt'] }])
  .sort((a, b) => a.name.localeCompare(b.name));

/** The language descriptions given to the editors' `languages` input. */
export const EDITOR_LANGUAGES = languages;

/** The language of a name, case-insensitive; `undefined` when unknown. */
export function findLanguage(name: string): LanguageOption | undefined {
  const lower = name.toLowerCase();
  return LANGUAGE_OPTIONS.find((lang) => lang.name.toLowerCase() === lower);
}

/**
 * The sample file of a language under `public/lang_samples/`: the lower-cased name with every space replaced by
 * `_` and `#` by `sharp` (`C#` → `csharp.txt`, `Plain Text` → `plain_text.txt`).
 */
export function langSampleFile(name: string): string {
  return `${name.replaceAll(' ', '_').replaceAll('#', 'sharp').toLowerCase()}.txt`;
}
