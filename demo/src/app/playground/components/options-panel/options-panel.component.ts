import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatTooltip } from '@angular/material/tooltip';
import { DIFF_ORIENTATIONS, DIFF_REVERT_CONTROLS } from '@app/constants/const-codemirror-diff-orientation';
import { PRESET_OPTIONS } from '@app/constants/const-codemirror-extensions';
import type { PlaygroundMode } from '@app/constants/const-codemirror-mode';
import { SETUP_OPTIONS } from '@app/constants/const-codemirror-setup';
import type { PlaygroundOptions } from '../../playground.models';

/** The options holding a boolean. */
type BooleanKey = {
  [K in keyof PlaygroundOptions]: PlaygroundOptions[K] extends boolean ? K : never;
}[keyof PlaygroundOptions];

/** A switch of the options panel. */
interface ToggleControl {
  readonly key: BooleanKey;
  readonly label: string;
  /** What the option does, shown as a tooltip. */
  readonly hint: string;
  /** The modes the option applies to; every mode when left out. */
  readonly modes?: readonly PlaygroundMode[];
}

const BEHAVIOUR: readonly ToggleControl[] = [
  { key: 'disabled', label: 'Disabled', hint: 'No editing and no focus; a form field bound to it is disabled' },
  { key: 'readonly', label: 'Read-only', hint: 'The content can be selected and copied, not edited' },
  {
    key: 'originalReadonly',
    label: 'Original read-only',
    hint: 'Only the original document cannot be edited',
    modes: ['diff'],
  },
  {
    key: 'autoFocus',
    label: 'Focus when created',
    hint: 'Focuses the editor when it is created: switch the mode or reload to see it',
    modes: ['editor', 'unified-diff'],
  },
];

const FORMATTING: readonly ToggleControl[] = [
  { key: 'indentWithTab', label: 'Tab key indents', hint: 'Tab and Shift-Tab indent instead of moving the focus' },
  { key: 'lineWrapping', label: 'Wrap long lines', hint: 'Long lines wrap instead of scrolling horizontally' },
  { key: 'highlightWhitespace', label: 'Show whitespace', hint: 'Marks spaces and tabs' },
];

const EXTENSIONS: readonly ToggleControl[] = [
  { key: 'lineNumbers', label: 'Line numbers', hint: 'The line number gutter' },
  { key: 'foldGutter', label: 'Fold gutter', hint: 'Arrows that fold and unfold code blocks' },
  { key: 'highlightActiveLine', label: 'Highlight active line', hint: 'Highlights the line of the cursor' },
  { key: 'search', label: 'Search panel', hint: 'Search and replace with Mod-f' },
  { key: 'autocompletion', label: 'Autocompletion', hint: 'Completion suggestions while typing' },
  { key: 'lint', label: 'Lint TODO/FIXME', hint: 'A demo linter flagging TODO and FIXME as warnings' },
];

const DIFF: readonly ToggleControl[] = [
  { key: 'highlightChanges', label: 'Highlight changes', hint: 'Marks inserted and deleted text inside changes' },
  { key: 'gutter', label: 'Change gutter', hint: 'A gutter marker next to changed lines' },
  {
    key: 'collapseUnchanged',
    label: 'Collapse unchanged lines',
    hint: 'Hides long stretches of unchanged lines, keeping 3 lines around each change',
  },
  {
    key: 'mergeControls',
    label: 'Accept/reject buttons',
    hint: 'The buttons that accept or reject each change',
    modes: ['unified-diff'],
  },
  {
    key: 'syntaxHighlightDeletions',
    label: 'Highlight deleted code',
    hint: 'Deleted lines are syntax-highlighted with the language',
    modes: ['unified-diff'],
  },
  {
    key: 'allowInlineDiffs',
    label: 'Inline changes',
    hint: 'Changes within a line are shown inline instead of as deleted and inserted lines',
    modes: ['unified-diff'],
  },
];

/** The options of the playground, in collapsible sections; only the options of the current mode are shown. */
@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrl: './options-panel.component.scss',
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggle, MatTooltip],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsPanelComponent {
  readonly options = input.required<PlaygroundOptions>();
  /** The changed options. */
  readonly patch = output<Partial<PlaygroundOptions>>();

  protected readonly setups = SETUP_OPTIONS;
  protected readonly presets = PRESET_OPTIONS;
  protected readonly orientations = DIFF_ORIENTATIONS;
  protected readonly revertControls = DIFF_REVERT_CONTROLS;

  protected readonly mode = computed(() => this.options().mode);
  protected readonly isDiff = computed(() => this.mode() !== 'editor');
  protected readonly behaviour = computed(() => this.forMode(BEHAVIOUR));
  protected readonly formatting = computed(() => this.forMode(FORMATTING));
  protected readonly extensions = computed(() => this.forMode(EXTENSIONS));
  protected readonly diff = computed(() => this.forMode(DIFF));

  protected toggle(key: BooleanKey, checked: boolean): void {
    this.patch.emit({ [key]: checked });
  }

  /** Emits a whole number in [1, 16]; anything else puts the current value back in the field. */
  protected setNumber(key: 'indentUnit' | 'tabSize', field: HTMLInputElement): void {
    const value = Number(field.value);
    if (Number.isInteger(value) && value >= 1 && value <= 16) {
      this.patch.emit({ [key]: value });
    } else {
      field.value = String(this.options()[key]);
    }
  }

  protected setPlaceholder(value: string): void {
    this.patch.emit({ placeholder: value.slice(0, 200) });
  }

  /** Emits a select value when it is one of the given options. */
  protected select<K extends 'setup' | 'orientation' | 'revertControls'>(
    key: K,
    options: readonly { readonly value: PlaygroundOptions[K] }[],
    value: unknown,
  ): void {
    const option = options.find((candidate) => candidate.value === value);
    if (option) this.patch.emit({ [key]: option.value });
  }

  protected setPresets(value: unknown): void {
    if (!Array.isArray(value)) return;
    this.patch.emit({ presets: PRESET_OPTIONS.map((preset) => preset.value).filter((name) => value.includes(name)) });
  }

  private forMode(controls: readonly ToggleControl[]): readonly ToggleControl[] {
    const mode = this.mode();
    return controls.filter((control) => !control.modes || control.modes.includes(mode));
  }
}
