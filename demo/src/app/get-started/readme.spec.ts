import { prepareReadme } from './readme';

describe('prepareReadme', () => {
  it('should remove intro paragraphs and the whitespace after them', () => {
    const markdown = ['<p align="center" class="intro">', '  <img src="logo.svg" />', '</p>', '', '# Title', ''].join(
      '\n',
    );

    expect(prepareReadme(markdown)).toBe('# Title\n');
  });

  it('should keep paragraphs without the intro class', () => {
    const markdown = '<p align="center">Kept</p>\n\n# Title\n';

    expect(prepareReadme(markdown)).toBe(markdown);
  });

  it('should remove the table of contents section up to the next heading', () => {
    const markdown = ['# Title', '', '## Table of Contents', '', '- [A](#a)', '', '## A', '', 'Text', ''].join('\n');

    expect(prepareReadme(markdown)).toBe(['# Title', '', '## A', '', 'Text', ''].join('\n'));
  });

  it('should remove a table of contents that runs to the end of the text', () => {
    const markdown = '# Title\n\nIntro\n\n### Table of contents\n\n- [A](#a)\n';

    expect(prepareReadme(markdown)).toBe('# Title\n\nIntro\n\n');
  });

  it('should prepare the real README shape', () => {
    const markdown = [
      '<p align="center" class="intro">',
      '  <img alt="Logo" src="logo.svg" width="100%" />',
      '</p>',
      '',
      '<p align="center" class="intro">',
      '  <a href="https://example.com"><img alt="Badge" src="badge.svg" /></a>',
      '</p>',
      '',
      'Description paragraph.',
      '',
      '- Feature one',
      '- Feature two',
      '',
      '### Table of contents',
      '',
      '- [Installation](#installation)',
      '  - [CodeMirror](#codemirror)',
      '- [Usage](#usage)',
      '',
      '## Installation',
      '',
      '#### CodeMirror',
      '',
      '```bash',
      'npm install codemirror',
      '```',
      '',
    ].join('\n');

    const expected = [
      'Description paragraph.',
      '',
      '- Feature one',
      '- Feature two',
      '',
      '## Installation',
      '',
      '#### CodeMirror',
      '',
      '```bash',
      'npm install codemirror',
      '```',
      '',
    ].join('\n');

    expect(prepareReadme(markdown)).toBe(expected);
  });

  it('should leave markdown without intro or table of contents unchanged', () => {
    const markdown = '# Title\n\n## Installation\n\n#### Table of contents\n\nText\n';

    expect(prepareReadme(markdown)).toBe(markdown);
  });

  it('should handle Windows line endings', () => {
    const markdown =
      '<p class="intro">\r\n  Logo\r\n</p>\r\n\r\nText\r\n\r\n### Table of contents\r\n\r\n- [A](#a)\r\n\r\n## A\r\n';

    expect(prepareReadme(markdown)).toBe('Text\r\n\r\n## A\r\n');
  });
});
