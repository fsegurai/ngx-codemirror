import { NgModule } from '@angular/core';
import { CodeDiffEditorComponent } from './code-diff-editor/code-diff-editor.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';

const sharedDeclarations = [
  CodeEditorComponent,
  CodeDiffEditorComponent,
];

@NgModule({
  imports: [...sharedDeclarations],
  exports: sharedDeclarations,
})
export class CodeEditorModule {
}