import { DEFAULT_OPTIONS } from './playground.models';
import { buildSnippet } from './playground-snippet';

describe('buildSnippet', () => {
  it('has only the value, the language and the languages with the default options', () => {
    expect(buildSnippet(DEFAULT_OPTIONS)).toBe(
      '<ngx-code-editor [(value)]="code"\n  language="JavaScript"\n  [languages]="languages" />',
    );
  });

  it('adds only the bindings that differ from the library defaults', () => {
    const snippet = buildSnippet({
      ...DEFAULT_OPTIONS,
      theme: 'nord',
      tabSize: 2,
      lineWrapping: true,
      lineNumbers: false,
      presets: ['emacs-keys', 'trailing-whitespace'],
      placeholder: 'Say "hi"',
    });

    expect(snippet).toContain('theme="nord"');
    expect(snippet).toContain('[tabSize]="2"');
    expect(snippet).toContain('[lineWrapping]="true"');
    expect(snippet).toContain('[lineNumbers]="false"');
    expect(snippet).toContain(`[presets]="['emacs-keys', 'trailing-whitespace']"`);
    expect(snippet).toContain('placeholder="Say &quot;hi&quot;"');
    for (const unchanged of ['foldGutter', 'search', 'indentUnit', 'readonly', 'setup', 'orientation']) {
      expect(snippet).not.toContain(unchanged);
    }
  });

  it('sets the convenience inputs that differ from what the setup turns on', () => {
    const snippet = buildSnippet({ ...DEFAULT_OPTIONS, setup: 'minimal' });

    expect(snippet).toContain('setup="minimal"');
    expect(snippet).toContain('[lineNumbers]="true"');
    expect(snippet).toContain('[autocompletion]="true"');
  });

  it('uses the tag and the bindings of each diff mode', () => {
    const split = buildSnippet({ ...DEFAULT_OPTIONS, mode: 'diff', orientation: 'b-a', mergeControls: false });
    expect(split).toMatch(/^<ngx-code-diff-editor \[\(value\)\]="diff"/);
    expect(split).toContain('orientation="b-a"');
    expect(split).not.toContain('mergeControls');

    const unified = buildSnippet({ ...DEFAULT_OPTIONS, mode: 'unified-diff', mergeControls: false, setup: 'none' });
    expect(unified).toMatch(/^<ngx-code-unified-diff-editor \[original\]="original" \[\(value\)\]="code"/);
    expect(unified).toContain('[mergeControls]="false"');
    expect(unified).toContain('[setup]="null"');
  });
});
