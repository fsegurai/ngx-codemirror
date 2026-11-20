import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

/** The position of the selection among the changed chunks of a diff editor. */
export interface ChunkPosition {
  /** The 1-based chunk holding the selection; `0` when the selection is outside every chunk. */
  readonly current: number;
  readonly total: number;
}

/** Previous/next change buttons with the position among the changes ("change 2 of 5"). */
@Component({
  selector: 'app-chunk-navigator',
  imports: [MatButtonModule, MatTooltip],
  template: `
    <button mat-stroked-button type="button" (click)="previous.emit()" [disabled]="!position().total"
            matTooltip="Previous change (Alt-↑ in the editor)">
      Previous
    </button>
    <span class="position" role="status">
      @if (!position().total) {
        No changes
      } @else if (position().current) {
        Change {{ position().current }} of {{ position().total }}
      } @else {
        {{ position().total }} {{ position().total === 1 ? 'change' : 'changes' }}
      }
    </span>
    <button mat-stroked-button type="button" (click)="next.emit()" [disabled]="!position().total"
            matTooltip="Next change (Alt-↓ in the editor)">
      Next
    </button>
  `,
  styles: `
    :host {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
    }

    .position {
      min-width: 8rem;
      text-align: center;
      font-size: 0.875rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChunkNavigatorComponent {
  readonly position = input.required<ChunkPosition>();
  readonly previous = output<void>();
  readonly next = output<void>();
}

/**
 * The position of a selection among chunks of the modified document (`fromB`/`toB`).
 *
 * @param chunks The changed chunks.
 * @param head The selection head in the modified document.
 */
export function chunkPositionOf(chunks: readonly { fromB: number; toB: number }[], head: number): ChunkPosition {
  const index = chunks.findIndex((chunk) => head >= chunk.fromB && head <= chunk.toB);
  return { current: index + 1, total: chunks.length };
}
