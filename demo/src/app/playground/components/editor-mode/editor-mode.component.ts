import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { type FieldTree, FormField } from '@angular/forms/signals';
import { CodeEditorComponent } from 'ngx-codemirror';
import type { CommonInputs, EditorEvent, EditorInputs } from '../../playground.models';
import { errorEvent, plainEvent, valueEvent } from '../mode-events';
import { MODE_STYLES } from '../mode-styles';

/** The code editor of the playground, bound to a Signal Forms field (which owns `disabled` and `readonly`). */
@Component({
  selector: 'app-editor-mode',
  imports: [CodeEditorComponent, FormField],
  template: `
    <ngx-code-editor class="editor"
                     [formField]="field()"
                     [theme]="common().theme"
                     [language]="common().language"
                     [languages]="common().languages"
                     [setup]="common().setup"
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
                     [autoFocus]="editor().autoFocus"
                     (ready)="event.emit(ready)"
                     (valueChange)="event.emit(valueEvent('valueChange', $event))"
                     (focused)="event.emit(plainEvent('focused'))"
                     (blurred)="event.emit(plainEvent('blurred'))"
                     (touch)="event.emit(plainEvent('touch'))"
                     (error)="event.emit(errorEvent($event))" />
  `,
  styles: MODE_STYLES,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorModeComponent {
  /** The inputs every mode binds. */
  readonly common = input.required<CommonInputs>();
  /** The inputs of the code editor only. */
  readonly editor = input.required<EditorInputs>();
  /** The form field of the document. */
  readonly field = input.required<FieldTree<string>>();
  /** The editor's outputs, as log events. */
  readonly event = output<EditorEvent>();

  protected readonly ready = plainEvent('ready', 'EditorView created');
  protected readonly plainEvent = plainEvent;
  protected readonly valueEvent = valueEvent;
  protected readonly errorEvent = errorEvent;
}
