import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CodeDiffEditorComponent, CodeEditorComponent } from "ngx-codemirror";
import { FlexModule } from '@angular/flex-layout/flex';
import { CodeMirrorDiffOrientation, CodeMirrorDiffRevControls } from "@app/constants/const-codemirror-diff-orientation";
import { CodeMirrorMode } from "@app/constants/const-codemirror-mode";
import { CodeMirrorThemes } from "@app/constants/const-codemirror-themes";
import { CodeMirrorSetup } from "@app/constants/const-codemirror-setup";
import { languages } from '@codemirror/language-data';
import { ScrollspyNavLayoutComponent } from '@shared/scrollspy-nav-layout';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOption, MatSelectModule } from "@angular/material/select";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { MatInput } from "@angular/material/input";

import { unifiedMergeView } from '@codemirror/merge';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-playground',
  imports: [
    CodeEditorComponent,
    FlexModule,
    ScrollspyNavLayoutComponent,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOption,
    MatSlideToggle,
    MatInput,
    MatDivider,
    CodeDiffEditorComponent,
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PlaygroundComponent implements OnInit, OnDestroy {
  private changeDetector = inject(ChangeDetectorRef);

  protected readonly CodeMirrorDiffOrientation = CodeMirrorDiffOrientation;
  protected readonly CodeMirrorDiffRevControls = CodeMirrorDiffRevControls;
  protected readonly CodeMirrorMode = CodeMirrorMode;
  protected readonly CodeMirrorSetup = CodeMirrorSetup;
  protected readonly CodeMirrorThemes = CodeMirrorThemes;
  // protected readonly CodeMirrorLanguages = languages.sort((a, b) => a.name.localeCompare(b.name));
  protected readonly CodeMirrorCustomLanguages = languages
    .map(lang => ({ name: lang.name, alias: lang.alias }))
    .concat([{ name: 'Plain Text', alias: ['plaintext'] }])
    .sort((a, b) => a.name.localeCompare(b.name));
  protected CodeMirrorLanguages = languages;


  protected selectedDiffOrientation = this.CodeMirrorDiffOrientation[0];
  protected selectedDiffRevControl = this.CodeMirrorDiffRevControls[0];

  protected selectedMode = this.CodeMirrorMode[0];
  protected selectedSetup = this.CodeMirrorSetup[0];
  protected selectedTheme = this.CodeMirrorThemes[0];
  protected selectedLanguage = this.CodeMirrorCustomLanguages[0];
  protected isDisabled = false;
  protected isReadOnly = false;
  protected placeholder = 'Type your code here...';
  protected isTabIndent = false;
  protected indentUnit = 2;
  protected isLineWrapping = true;
  protected isHighlightWhitespace = false;
  protected isOutputDisplayed = false;
  protected isChangeHighlighted = true;
  protected isGutter = true;

  /* Code Editor Content */
  private _editorContent = '';

  get editorContent() {
    return this._editorContent;
  }

  set editorContent(value: string) {
    this._editorContent = value;
    this.changeDetector.detectChanges();
  }

  /* Code Editor Diff Content */
  protected originalDiffCode = `one
two
three
four
five`;
  protected modifiedDiffCode = this.originalDiffCode.replace(/t/g, 'T') + '\nSix';

  protected unifiedExtension = [
    unifiedMergeView({
      original: this.originalDiffCode,
    }),
  ];

  ngOnInit(): void {
    this.onLanguageChange(this.selectedLanguage);
  }

  ngOnDestroy(): void {
    this.changeDetector.detach();
  }

  /**
   * Change the editor's language sample.
   * @param lang The selected language.
   */
  onLanguageChange(lang: any) {
    this.selectedLanguage = lang;

    const langFormated = lang.name.replace(' ', '_').replace('#', 'sharp');
    this.getLangSample(langFormated);
  }

  /**
   * Get the language sample from the server.
   * @param lang The language name.
   */
  getLangSample(lang: string): void {
    try {
      fetch(`lang_samples/${ lang.toLowerCase() }.txt`).then(async response => {
        this._editorContent = response.ok ? await response.text() : '';
        this.changeDetector.detectChanges();
      });
    } catch (error) {
      console.error('Error fetching language sample:', error);
    }
  }
}
