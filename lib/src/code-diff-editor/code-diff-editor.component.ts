import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  input,
  output,
  inject
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DiffConfig, MergeView } from '@codemirror/merge';
import { Compartment, Extension, StateEffect } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { basicSetup, minimalSetup } from 'codemirror';
import { External, Setup, Theme } from 'ngx-codemirror';

export type Orientation = 'a-b' | 'b-a';
export type RevertControls = 'a-to-b' | 'b-to-a';
export type RenderRevertControl = () => HTMLElement;

export interface DiffEditorModel {
  original: string;
  modified: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-code-diff-editor, code-diff-editor, [diff-editor]',
  imports: [],
  template: '',
  styles: `
    .diff-editor {
      display: block;

      .cm-mergeView,
      .cm-mergeViewEditors {
        height: 100%;
      }

      .cm-mergeView .cm-editor,
      .cm-mergeView .cm-scroller {
        height: 100% !important;
      }
    }
  `,
  host: {
    class: 'diff-editor',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeDiffEditorComponent),
      multi: true,
    },
  ],
})
export class CodeDiffEditorComponent implements OnChanges, OnInit, OnDestroy, ControlValueAccessor {
  private _elementRef = inject<ElementRef<Element>>(ElementRef);

  /** The editor's theme. */
  readonly theme = input<Theme>('light');

  /**
   * The editor's built-in setup. The value can be set to
   * [`basic`](https://codemirror.net/docs/ref/#codemirror.basicSetup),
   * [`minimal`](https://codemirror.net/docs/ref/#codemirror.minimalSetup) or `null`.
   *
   * Don't support change dynamically!
   */
  readonly setup = input<Setup>('basic');

  /** The diff-editor's original value. */
  @Input() originalValue = '';

  /**
   * The MergeView original config's
   * [extensions](https://codemirror.net/docs/ref/#state.EditorStateConfig.extensions).
   *
   * Don't support change dynamically!
   */
  readonly originalExtensions = input<Extension[]>([]);

  /** The diff-editor's modified value. */
  @Input() modifiedValue = '';

  /**
   * The MergeView modified config's
   * [extensions](https://codemirror.net/docs/ref/#state.EditorStateConfig.extensions).
   */
  readonly modifiedExtensions = input<Extension[]>([]);

  /** Controls whether editor A or editor B is shown first. Defaults to `"a-b"`. */
  readonly orientation = input<Orientation>();

  /** Controls whether revert controls are shown between changed chunks. */
  readonly revertControls = input<RevertControls>();

  /** When given, this function is called to render the button to revert a chunk. */
  readonly renderRevertControl = input<RenderRevertControl>();

  /**
   * By default, the merge view will mark inserted and deleted text
   * in changed chunks. Set this to false in order to turn that off.
   */
  readonly highlightChanges = input(true, { transform: booleanAttribute });

  /** Controls whether a gutter marker is shown next to changed lines. */
  readonly gutter = input(true, { transform: booleanAttribute });

  /** Whether the diff-editor is disabled. */
  @Input({ transform: booleanAttribute }) disabled = false;

  /**
   * When given, long stretches of unchanged text are collapsed.
   * `margin` gives the number of lines to leave visible after/before
   * a change (default is 3), and `minSize` gives the minimum amount
   * of collapsible lines that need to be present (defaults to 4).
   */
  readonly collapseUnchanged = input<{
    margin?: number;
    minSize?: number;
  }>();

  /** Pass options to the diff algorithm. */
  readonly diffConfig = input<DiffConfig>();

  /** Event emitted when the editor's original value changes. */
  readonly originalValueChange = output<string>();

  /** Event emitted when focus on the original editor. */
  readonly originalFocus = output<void>();

  /** Event emitted when blur on the original editor. */
  readonly originalBlur = output<void>();

  /** Event emitted when the editor's modified value changes. */
  readonly modifiedValueChange = output<string>();

  /** Event emitted when focus on the modified editor. */
  readonly modifiedFocus = output<void>();

  /** Event emitted when blur on the modified editor. */
  readonly modifiedBlur = output<void>();

  private _onChange: (value: DiffEditorModel) => void = () => {
    // Intentionally left blank
  };
  private _onTouched: () => void = () => {
    // Intentionally left blank
  };

  /** The merge view instance. */
  mergeView?: MergeView;

  private _updateListener = (editor: 'a' | 'b') => {
    return EditorView.updateListener.of(vu => {
      if (vu.docChanged && !vu.transactions.some(tr => tr.annotation(External))) {
        const value = vu.state.doc.toString();
        if (editor == 'a') {
          this._onChange({ original: value, modified: this.modifiedValue });
          this.originalValue = value;
          this.originalValueChange.emit(value);
        } else {
          this._onChange({ original: this.originalValue, modified: value });
          this.modifiedValue = value;
          this.modifiedValueChange.emit(value);
        }
      }
    });
  };

  private _editableConf = new Compartment();
  private _themeConf = new Compartment();

  private _getAllExtensions(editor: 'a' | 'b'): Extension[] {
    const setup = this.setup();
    return [
      this._editableConf.of([]),
      this._themeConf.of([]),

      this._updateListener(editor),
      setup === 'basic' ? basicSetup : setup === 'minimal' ? minimalSetup : [],
      ...(editor === 'a' ? this.originalExtensions() : this.modifiedExtensions()),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['originalValue']) {
      this.setValue('a', this.originalValue);
    }
    if (changes['modifiedValue']) {
      this.setValue('b', this.modifiedValue);
    }
    if (changes['disabled']) {
      this.setEditable(!this.disabled);
    }
    if (changes['theme']) {
      this.setTheme(this.theme());
    }
    this.reconfigureMergeView(changes);
  }

  ngOnInit(): void {
    this.initializeMergeView();
    this.addEventListeners();
    this.setEditable(!this.disabled);
    this.setTheme(this.theme());
  }

  ngOnDestroy(): void {
    this.mergeView?.destroy();
  }

  writeValue(value: DiffEditorModel): void {
    if (this.mergeView && value != null && typeof value === 'object') {
      this.originalValue = value.original;
      this.modifiedValue = value.modified;
      this.setValue('a', value.original);
      this.setValue('b', value.modified);
    }
  }

  registerOnChange(fn: (value: DiffEditorModel) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.setEditable(!isDisabled);
  }

  /** Sets diff-editor's value. */
  private setValue(editor: 'a' | 'b', value: string) {
    this.mergeView?.[editor].dispatch({
      changes: { from: 0, to: this.mergeView[editor].state.doc.length, insert: value },
    });
  }

  /** Sets editor's editable state. */
  private setEditable(value: boolean) {
    this._dispatchEffects(this._editableConf.reconfigure(EditorView.editable.of(value)));
  }

  /** Sets editor's theme. */
  private setTheme(value: Theme) {
    this._dispatchEffects(this._themeConf.reconfigure(value === 'light' ? [] : value));
  }

  /** Sets the root extensions of the editor state. */
  private setExtensions(editor: 'a' | 'b', value: Extension[]) {
    this.mergeView?.[editor].dispatch({
      effects: StateEffect.reconfigure.of(value),
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _dispatchEffects(effects: StateEffect<any> | readonly StateEffect<any>[]) {
    this.mergeView?.a.dispatch({ effects });
    this.mergeView?.b.dispatch({ effects });
  }

  private initializeMergeView() {
    this.mergeView = new MergeView({
      parent: this._elementRef.nativeElement,
      a: {
        doc: this.originalValue,
        extensions: this._getAllExtensions('a'),
      },
      b: {
        doc: this.modifiedValue,
        extensions: this._getAllExtensions('b'),
      },
      orientation: this.orientation(),
      revertControls: this.revertControls(),
      renderRevertControl: this.renderRevertControl(),
      highlightChanges: this.highlightChanges(),
      gutter: this.gutter(),
      collapseUnchanged: this.collapseUnchanged(),
      diffConfig: this.diffConfig(),
    });
  }

  private addEventListeners() {
    this.mergeView?.a.contentDOM.addEventListener('focus', () => {
      this._onTouched();
      this.originalFocus.emit();
    });

    this.mergeView?.a.contentDOM.addEventListener('blur', () => {
      this._onTouched();
      this.originalBlur.emit();
    });

    this.mergeView?.b.contentDOM.addEventListener('focus', () => {
      this._onTouched();
      this.modifiedFocus.emit();
    });

    this.mergeView?.b.contentDOM.addEventListener('blur', () => {
      this._onTouched();
      this.modifiedBlur.emit();
    });
  }

  private reconfigureMergeView(changes: SimpleChanges) {
    if (changes['orientation']) {
      this.mergeView?.reconfigure({ orientation: this.orientation() });
    }
    if (changes['revertControls']) {
      this.mergeView?.reconfigure({ revertControls: this.revertControls() });
    }
    if (changes['renderRevertControl']) {
      this.mergeView?.reconfigure({ renderRevertControl: this.renderRevertControl() });
    }
    if (changes['highlightChanges']) {
      this.mergeView?.reconfigure({ highlightChanges: this.highlightChanges() });
    }
    if (changes['gutter']) {
      this.mergeView?.reconfigure({ gutter: this.gutter() });
    }
    if (changes['collapseUnchanged']) {
      this.mergeView?.reconfigure({ collapseUnchanged: this.collapseUnchanged() });
    }
    if (changes['diffConfig']) {
      this.mergeView?.reconfigure({ diffConfig: this.diffConfig() });
    }
    if (changes['setup'] || changes['originalExtensions'] || changes['modifiedExtensions']) {
      this.setExtensions('a', this._getAllExtensions('a'));
      this.setExtensions('b', this._getAllExtensions('b'));
    }
  }
}
