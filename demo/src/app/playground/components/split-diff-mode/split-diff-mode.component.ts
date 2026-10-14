import { ChangeDetectionStrategy, Component, input, model, output, signal, viewChild } from '@angular/core';
import type { MergeView } from '@codemirror/merge';
import { EditorView, type KeyBinding } from '@codemirror/view';
import { CodeDiffEditorComponent, type DiffEditorModel } from 'ngx-codemirror';
import type { CommonInputs, EditorEvent, SplitDiffInputs } from '../../playground.models';
import { shallowSame } from '../../playground.models';
import {
  ChunkNavigatorComponent,
  type ChunkPosition,
  chunkPositionOf,
} from '../chunk-navigator/chunk-navigator.component';
import { errorEvent, plainEvent, valueEvent } from '../mode-events';
import { MODE_STYLES } from '../mode-styles';

/** The split diff editor of the playground, with its change navigator (also Alt-↑/Alt-↓ in the editors). */
@Component({
  selector: 'app-split-diff-mode',
  imports: [CodeDiffEditorComponent, ChunkNavigatorComponent],
  template: `
    <app-chunk-navigator [position]="position()" (previous)="previousChunk()" (next)="nextChunk()" />
    <ngx-code-diff-editor class="editor"
                          [(value)]="value"
                          [theme]="common().theme"
                          [language]="common().language"
                          [languages]="common().languages"
                          [setup]="common().setup"
                          [disabled]="common().disabled"
                          [readonly]="common().readonly"
                          [placeholder]="common().placeholder"
                          [indentWithTab]="common().indentWithTab"
                          [indentUnit]="common().indentUnit"
                          [tabSize]="common().tabSize"
                          [lineWrapping]="common().lineWrapping"
                          [highlightWhitespace]="common().highlightWhitespace"
                          [lineNumbers]="common().lineNumbers"
                          [foldGutter]="common().foldGutter"
                          [highlightActiveLine]="common().highlightActiveLine"
                          [search]="common().search"
                          [autocompletion]="common().autocompletion"
                          [lint]="common().lint"
                          [presets]="common().presets"
                          [keymap]="keymap"
                          [orientation]="diff().orientation"
                          [revertControls]="diff().revertControls"
                          [highlightChanges]="diff().highlightChanges"
                          [gutter]="diff().gutter"
                          [collapseUnchanged]="diff().collapseUnchanged"
                          [originalReadonly]="diff().originalReadonly"
                          [originalExtensions]="tracker"
                          [modifiedExtensions]="tracker"
                          (ready)="onReady($event)"
                          (originalValueChange)="event.emit(valueEvent('originalValueChange', $event))"
                          (modifiedValueChange)="event.emit(valueEvent('modifiedValueChange', $event))"
                          (originalFocused)="event.emit(plainEvent('originalFocused'))"
                          (originalBlurred)="event.emit(plainEvent('originalBlurred'))"
                          (modifiedFocused)="event.emit(plainEvent('modifiedFocused'))"
                          (modifiedBlurred)="event.emit(plainEvent('modifiedBlurred'))"
                          (touch)="event.emit(plainEvent('touch'))"
                          (error)="event.emit(errorEvent($event))" />
  `,
  styles: MODE_STYLES,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitDiffModeComponent {
  /** The inputs every mode binds. */
  readonly common = input.required<CommonInputs>();
  /** The inputs of the split diff editor only. */
  readonly diff = input.required<SplitDiffInputs>();
  /** Both documents. */
  readonly value = model.required<DiffEditorModel>();
  /** The editor's outputs, as log events. */
  readonly event = output<EditorEvent>();

  private readonly editor = viewChild.required(CodeDiffEditorComponent);
  private mergeView: MergeView | undefined;

  /** The position of the modified editor's selection among the changes. */
  protected readonly position = signal<ChunkPosition>({ current: 0, total: 0 }, { equal: shallowSame });

  /** Alt-↑/Alt-↓ move between changes, over the setup's move-line bindings. */
  protected readonly keymap: readonly KeyBinding[] = [
    { key: 'Alt-ArrowUp', run: () => this.previousChunk() },
    { key: 'Alt-ArrowDown', run: () => this.nextChunk() },
  ];

  /** Follows the selection and the chunks of both editors. */
  protected readonly tracker = EditorView.updateListener.of(() => this.refresh());

  protected readonly plainEvent = plainEvent;
  protected readonly valueEvent = valueEvent;
  protected readonly errorEvent = errorEvent;

  protected onReady(mergeView: MergeView): void {
    this.mergeView = mergeView;
    this.refresh();
    this.event.emit(plainEvent('ready', 'MergeView created'));
  }

  protected previousChunk(): boolean {
    const moved = this.editor().goToPreviousChunk();
    this.refresh();
    return moved;
  }

  protected nextChunk(): boolean {
    const moved = this.editor().goToNextChunk();
    this.refresh();
    return moved;
  }

  private refresh(): void {
    if (!this.mergeView) return;
    this.position.set(chunkPositionOf(this.editor().getChunks(), this.mergeView.b.state.selection.main.head));
  }
}
