import { ChangeDetectionStrategy, Component, type OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { CodeMirrorDiffOrientation, CodeMirrorDiffRevControls } from '@app/constants/const-codemirror-diff-orientation';
import { CodeMirrorMode } from '@app/constants/const-codemirror-mode';
import { CodeMirrorSetup } from '@app/constants/const-codemirror-setup';
import { applyMergeRevertStyles, CodeMirrorThemes } from '@app/constants/const-codemirror-themes';
import { languages } from '@codemirror/language-data';
import { unifiedMergeView } from '@codemirror/merge';
import { ScrollspyNavLayoutComponent } from '@shared/scrollspy-nav-layout';
import { CodeDiffEditorComponent, CodeEditorComponent } from 'ngx-codemirror';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  imports: [
    CodeEditorComponent,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PlaygroundComponent implements OnInit {
  protected readonly CodeMirrorDiffOrientation = CodeMirrorDiffOrientation;
  protected readonly CodeMirrorDiffRevControls = CodeMirrorDiffRevControls;
  protected readonly CodeMirrorMode = CodeMirrorMode;
  protected readonly CodeMirrorSetup = CodeMirrorSetup;
  protected readonly CodeMirrorThemes = CodeMirrorThemes;
  // protected readonly CodeMirrorLanguages = languages.sort((a, b) => a.name.localeCompare(b.name));
  protected readonly CodeMirrorCustomLanguages = languages
    .map((lang) => ({ name: lang.name, alias: lang.alias }))
    .concat([{ name: 'Plain Text', alias: ['plaintext'] }])
    .sort((a, b) => a.name.localeCompare(b.name));
  protected CodeMirrorLanguages = languages;

  protected readonly selectedDiffOrientation = signal(this.CodeMirrorDiffOrientation[1]);
  protected readonly selectedDiffRevControl = signal(this.CodeMirrorDiffRevControls[1]);

  protected readonly selectedMode = signal(this.CodeMirrorMode[0]);
  protected readonly selectedSetup = signal(this.CodeMirrorSetup[0]);
  protected readonly selectedTheme = signal(this.CodeMirrorThemes[0]);
  protected readonly selectedLanguage = signal(this.CodeMirrorCustomLanguages[0]);
  protected readonly isDisabled = signal(false);
  protected readonly isReadOnly = signal(false);
  protected readonly placeholder = signal('Type your code here...');
  protected readonly isTabIndent = signal(false);
  protected readonly indentUnit = signal(2);
  protected readonly isLineWrapping = signal(true);
  protected readonly isHighlightWhitespace = signal(false);
  protected readonly isOutputDisplayed = signal(false);
  protected readonly isChangeHighlighted = signal(true);
  protected readonly isGutter = signal(true);

  /* Code Editor Content */
  protected readonly editorContent = signal('');

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
    this.onLanguageChange(this.selectedLanguage());
    this.setTheme(this.selectedTheme());
  }

  /**
   * Change the editor's language sample.
   * @param lang The selected language.
   */
  onLanguageChange(lang: any) {
    this.selectedLanguage.set(lang);

    const langFormated = lang.name.replace(' ', '_').replace('#', 'sharp');
    this.getLangSample(langFormated);
  }

  /**
   * Get the language sample from the server.
   * @param lang The language name.
   */
  getLangSample(lang: string): void {
    try {
      fetch(`lang_samples/${lang.toLowerCase()}.txt`).then(async (response) => {
        this.editorContent.set(response.ok ? await response.text() : ''); // Signal update schedules change detection
      });
    } catch (error) {
      console.error('Error fetching language sample:', error);
    }
  }

  /**
   * Set the theme for the CodeMirror editor.
   * @param value The theme value containing mergeStyles.
   */
  setTheme(value: { mergeStyles: any }): void {
    applyMergeRevertStyles(
      value.mergeStyles || {
        backgroundColor: '#f0f0f0',
        borderColor: '#ccc',
        buttonColor: '#333',
        buttonHoverColor: '#ddd',
      },
    );
  }
}
