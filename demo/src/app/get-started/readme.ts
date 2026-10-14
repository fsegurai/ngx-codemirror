// * Matches an HTML `<p>` block with the `intro` class (logo and badges), with the whitespace after it
const INTRO_BLOCK = /<p\b[^>]*\bclass="[^"]*\bintro\b[^"]*"[^>]*>[\s\S]*?<\/p>\s*/gi;

// * Matches a level 2 or 3 "Table of contents" heading up to the next level 1-3 heading or the end of the text
const TABLE_OF_CONTENTS = /^#{2,3}[ \t]+table of contents[ \t]*(?:\r?\n|$)[\s\S]*?(?=^#{1,3}[ \t]|(?![\s\S]))/gim;

/**
 * Prepare the repository README for the Get Started page by removing the intro blocks
 * (logo and badges) and the table of contents, which the page replaces with its own navigation.
 * Everything else is left unchanged.
 * @param markdown - The raw README markdown
 */
export function prepareReadme(markdown: string): string {
  return markdown.replace(INTRO_BLOCK, '').replace(TABLE_OF_CONTENTS, '');
}
