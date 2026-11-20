import { ChangeDetectionStrategy, Component, computed, input, linkedSignal, output } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltip } from '@angular/material/tooltip';
import { LANGUAGE_OPTIONS } from '@app/constants/const-codemirror-languages';
import { PLAYGROUND_MODES, type PlaygroundMode } from '@app/constants/const-codemirror-mode';
import { THEME_GROUPS, THEME_OPTIONS, type ThemeGroup } from '@app/constants/const-codemirror-themes';

/** The playground toolbar: mode, language and theme pickers, and the page actions. */
@Component({
  selector: 'app-playground-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTooltip,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  readonly mode = input.required<PlaygroundMode>();
  readonly language = input.required<string>();
  readonly theme = input.required<string>();
  /** Whether the theme (bundle) is being loaded. */
  readonly themeLoading = input(false);
  /** Whether the language sample is being loaded. */
  readonly sampleLoading = input(false);

  readonly modeChange = output<PlaygroundMode>();
  readonly languageChange = output<string>();
  readonly themeChange = output<string>();
  readonly reset = output<void>();
  readonly copyLink = output<void>();
  readonly copySnippet = output<void>();
  readonly download = output<void>();

  protected readonly modes = PLAYGROUND_MODES;

  /** The text typed in the language field; back to the language when the panel closes. */
  protected readonly query = linkedSignal(() => this.language());

  /** The languages matching the typed text (every language while the field shows the current one). */
  protected readonly languages = computed(() => {
    const query = this.query().trim().toLowerCase();
    if (!query || query === this.language().toLowerCase()) return LANGUAGE_OPTIONS;
    return LANGUAGE_OPTIONS.filter((lang) => lang.name.toLowerCase().includes(query));
  });

  /** The theme groups, plus the current theme when it is not one of them (an unknown name from a link). */
  protected readonly themeGroups = computed<readonly ThemeGroup[]>(() => {
    const theme = this.theme();
    if (THEME_OPTIONS.some((option) => option.value === theme)) return THEME_GROUPS;
    return [...THEME_GROUPS, { label: 'Other', options: [{ viewValue: `${theme} (unregistered)`, value: theme }] }];
  });

  protected onMode(value: unknown): void {
    const mode = PLAYGROUND_MODES.find((option) => option.value === value);
    if (mode) this.modeChange.emit(mode.value);
  }

  protected onLanguage(value: unknown): void {
    if (typeof value === 'string' && value !== this.language()) this.languageChange.emit(value);
    this.query.set(this.language());
  }

  protected onTheme(value: unknown): void {
    if (typeof value === 'string') this.themeChange.emit(value);
  }
}
