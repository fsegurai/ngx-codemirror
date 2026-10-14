import { ApplicationRef, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { appConfig } from '@app/app.config';
import {
  CodeDiffEditorComponent,
  CodeEditorComponent,
  type CodeEditorError,
  CodeUnifiedDiffEditorComponent,
} from 'ngx-codemirror';

// Smoke tests of the BUILT library (`ngx-codemirror` resolves to `dist/lib`) wired with the demo's own providers.

@Component({
  selector: 'app-code-editor-host',
  template: '<ngx-code-editor [value]="code()" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeEditorComponent],
})
class CodeEditorHost {
  readonly code = signal('const answer = 42;');
}

@Component({
  selector: 'app-code-diff-editor-host',
  template: '<ngx-code-diff-editor [originalValue]="original()" [modifiedValue]="modified()" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeDiffEditorComponent],
})
class CodeDiffEditorHost {
  readonly original = signal('one\ntwo');
  readonly modified = signal('one\nTwo');
}

@Component({
  selector: 'app-code-unified-diff-editor-host',
  template: '<ngx-code-unified-diff-editor [original]="original()" [value]="modified()" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeUnifiedDiffEditorComponent],
})
class CodeUnifiedDiffEditorHost {
  readonly original = signal('one\ntwo');
  readonly modified = signal('one\nTwo');
}

@Component({
  selector: 'app-registered-theme-host',
  template: `<ngx-code-editor value="x" theme="nord" [presets]="['emacs-keys']" (error)="errors.push($event)" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeEditorComponent],
})
class RegisteredThemeHost {
  readonly errors: CodeEditorError[] = [];
}

describe('ngx-codemirror through the demo providers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: appConfig.providers });
  });

  it('renders the code editor with its initial value', async () => {
    const fixture = TestBed.createComponent(CodeEditorHost);
    await TestBed.inject(ApplicationRef).whenStable();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('.cm-editor')).not.toBeNull();
    expect(element.querySelector('.cm-content')?.textContent).toContain('const answer = 42;');
  });

  it('renders both sides of the diff editor', async () => {
    const fixture = TestBed.createComponent(CodeDiffEditorHost);
    await TestBed.inject(ApplicationRef).whenStable();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('.cm-mergeView')).not.toBeNull();
    expect(element.querySelectorAll('.cm-editor').length).toBe(2);
  });

  it('renders the unified diff editor with the deleted lines inline', async () => {
    const fixture = TestBed.createComponent(CodeUnifiedDiffEditorHost);
    await TestBed.inject(ApplicationRef).whenStable();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('.cm-editor').length).toBe(1);
    expect(element.querySelector('.cm-deletedChunk')).not.toBeNull();
  });

  it('accepts the themes and presets registered by provideCodeEditor()', async () => {
    const fixture = TestBed.createComponent(RegisteredThemeHost);
    await TestBed.inject(ApplicationRef).whenStable();

    expect(fixture.nativeElement.querySelector('.cm-editor')).not.toBeNull();
    expect(fixture.componentInstance.errors).toEqual([]);
  });
});
