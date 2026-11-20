import { documentsOf, modifiedSample, sameDocuments } from './playground-samples';

describe('playground samples', () => {
  const sample = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].join('\n');

  it('derives a modified sample with a few separate changes', () => {
    expect(modifiedSample(sample).split('\n')).toEqual(['a', 'b', 'd', 'e', 'e', 'f', 'h', 'g']);
  });

  it('marks a short sample as modified', () => {
    expect(modifiedSample('one')).toBe('one\n(modified)');
  });

  it('gives every mode the sample, and the diff modes its modified version', () => {
    const documents = documentsOf(sample);

    expect(documents.code).toBe(sample);
    expect(documents.diff).toEqual({ original: sample, modified: modifiedSample(sample) });
    expect([documents.unifiedOriginal, documents.unifiedValue]).toEqual([sample, modifiedSample(sample)]);
    expect(sameDocuments(documents, documentsOf(sample))).toBe(true);
    expect(sameDocuments(documents, { ...documents, code: 'edited' })).toBe(false);
  });
});
