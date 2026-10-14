import type { PlaygroundDocuments } from './playground.models';

/** The sample of a language without a sample file of its own. */
export const GENERIC_SAMPLE = `There is no sample for this language yet.

Type or paste some code here: the editor highlights it with the selected language.
Switch the mode to compare two versions in a diff editor.
`;

/**
 * A modified version of a sample, for the diff modes: one line removed near the start, one duplicated in the
 * middle and two swapped near the end, so the diff shows a few separate changes in any language.
 *
 * @param text The original sample.
 */
export function modifiedSample(text: string): string {
  const lines = text.split('\n');
  if (lines.length < 4) return `${text}\n(modified)`;

  const remove = Math.floor(lines.length * 0.25);
  const duplicate = Math.floor(lines.length * 0.5);
  const swap = Math.min(Math.floor(lines.length * 0.75), lines.length - 2);
  const modified = lines.map((line, index) => {
    if (index === swap) return lines[swap + 1];
    if (index === swap + 1) return lines[swap];
    return line;
  });
  modified.splice(duplicate, 0, lines[duplicate]);
  modified.splice(remove, 1);
  return modified.join('\n');
}

/** The documents of every mode for a sample: the sample as is, and against its modified version in the diffs. */
export function documentsOf(sample: string): PlaygroundDocuments {
  const modified = modifiedSample(sample);
  return {
    code: sample,
    diff: { original: sample, modified },
    unifiedOriginal: sample,
    unifiedValue: modified,
  };
}

/** Whether two sets of documents hold the same text. */
export function sameDocuments(a: PlaygroundDocuments, b: PlaygroundDocuments): boolean {
  return (
    a.code === b.code &&
    a.diff.original === b.diff.original &&
    a.diff.modified === b.diff.modified &&
    a.unifiedOriginal === b.unifiedOriginal &&
    a.unifiedValue === b.unifiedValue
  );
}
