import type { CodeEditorError } from 'ngx-codemirror';
import type { EditorEvent, EditorEventName } from '../playground.models';

/** An event of a mode, without detail. */
export function plainEvent(name: EditorEventName, detail = ''): EditorEvent {
  return { name, detail };
}

/** The `valueChange`-like event of a document. */
export function valueEvent(name: EditorEventName, value: string): EditorEvent {
  return { name, detail: `${value.length} characters` };
}

/** The `error` event of an editor. */
export function errorEvent(error: CodeEditorError): EditorEvent {
  return { name: 'error', detail: `${error.code}: ${error.message}`, failed: true };
}
