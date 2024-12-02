import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDiffEditorComponent } from './code-diff-editor.component';

describe('CodeDiffEditorComponent', () => {
  let component: CodeDiffEditorComponent;
  let fixture: ComponentFixture<CodeDiffEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeDiffEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeDiffEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
