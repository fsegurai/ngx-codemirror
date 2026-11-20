import { ClipboardModule } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltip } from '@angular/material/tooltip';
import type { ConfigEntry, LogEntry } from '../../playground.models';
import { EventLogComponent } from '../event-log/event-log.component';

/** The inspector below the editor: the event log, the bound model and the changed options. */
@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrl: './inspector.component.scss',
  imports: [ClipboardModule, EventLogComponent, MatButtonModule, MatTabsModule, MatTooltip],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InspectorComponent {
  readonly entries = input.required<readonly LogEntry[]>();
  /** The bound model, as text (the value, or the JSON of the diff documents). */
  readonly model = input.required<string>();
  /** A label for the model ("value", "{ original, modified }"). */
  readonly modelLabel = input.required<string>();
  /** The options that differ from their default. */
  readonly config = input.required<readonly ConfigEntry[]>();

  readonly clearLog = output<void>();
  /** Reports whether copying the model worked. */
  readonly modelCopied = output<boolean>();
}
