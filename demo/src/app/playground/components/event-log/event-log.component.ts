import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import type { LogEntry } from '../../playground.models';

/** The event log: the editor outputs, most recent first, with a text filter and an errors-only switch. */
@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrl: './event-log.component.scss',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSlideToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventLogComponent {
  readonly entries = input.required<readonly LogEntry[]>();
  readonly clear = output<void>();

  /** The text an entry's name or detail must contain. */
  protected readonly filter = signal('');
  /** Whether only failed entries are shown. */
  protected readonly errorsOnly = signal(false);

  protected readonly visible = computed(() => {
    const filter = this.filter().trim().toLowerCase();
    const errorsOnly = this.errorsOnly();
    return this.entries().filter(
      (entry) =>
        (!errorsOnly || entry.failed) &&
        (!filter || entry.name.toLowerCase().includes(filter) || entry.detail.toLowerCase().includes(filter)),
    );
  });
}
