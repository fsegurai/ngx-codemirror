import { Injectable, type Signal, signal } from '@angular/core';

/**
 * The layout of the routed page. A page that needs more room than the reading width (the playground) asks for the
 * wide layout while it is shown; the app shell applies it to the router outlet.
 */
@Injectable({ providedIn: 'root' })
export class PageLayoutService {
  private readonly _wide = signal(false);

  /** Whether the routed page uses the full window width. */
  readonly wide: Signal<boolean> = this._wide.asReadonly();

  /** Sets whether the routed page uses the full window width. */
  setWide(wide: boolean): void {
    this._wide.set(wide);
  }
}
