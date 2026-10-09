import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  effect,
  type InputSignal,
  inject,
  input,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import ScrollSpy from '@fsegurai/scrollspy';

let scrollSpyCounter = 0;

@Component({
  selector: 'app-scrollspy-nav',
  templateUrl: './scrollspy-nav.component.html',
  styleUrl: './scrollspy-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class ScrollspyNavComponent {
  // * == SERVICE INJECTIONS ==
  private elementRef: ElementRef<HTMLElement> = inject<ElementRef<HTMLElement>>(ElementRef);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private readonly isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  // * == INPUTS ==
  readonly headings: InputSignal<Element[] | undefined> = input<Element[] | undefined>();

  // * == PROPERTIES ==
  private scrollSpy: ScrollSpy | undefined;
  private readonly scrollSpyId: string = `scrollspy-${++scrollSpyCounter}`;

  constructor() {
    this.setupScrollSpyEffect();
  }

  /**
   * Sanitize HTML content by removing all HTML tags (any content starting and ending with <>) and returning only text content.
   * @param html - HTML content to sanitize.
   */
  protected sanitizeInnerHTML(html: string): string {
    return html.replace(/<[^>]+>/g, '');
  }

  /**
   * Sets up a scroll spy effect to monitor and react to changes in the headings.
   * If headings are available, the scroll spy watcher is initialized.
   * If headings become empty, the scroll spy is destroyed.
   * Handles proper cleanup on component destruction.
   *
   * @private - This method is private and should not be accessed outside of this class
   * @return {void} This method does not return a value.
   */
  private setupScrollSpyEffect(): void {
    // Use an effect to react to changes in the headings input
    effect((): void => {
      const currentHeadings: Element[] | undefined = this.headings();
      // ScrollSpy listens to window scroll and measures layout, so it only runs in the browser (not in a non-browser platform).
      if (!this.isBrowser) return;
      if (currentHeadings && currentHeadings.length > 0) {
        queueMicrotask(() => {
          // Ensure the scroll spy is set up when headings are available
          this.initializeScrollSpyWatcher();
        });
      } else {
        // If headings become empty, destroy the scroll spy
        this.destroyScrollSpy();
      }
    });

    // Use DestroyRef for component cleanup
    this.destroyRef.onDestroy((): void => {
      this.destroyScrollSpy();
    });
  }

  /**
   * Set up the scroll spy for the current component.
   * This method should be called after the headings have been initialized and
   * the DOM elements are confirmed to be rendered.
   * It is typically called within a microtask or effect.
   * @private - This method is private and should not be accessed outside of this class
   */
  private initializeScrollSpyWatcher(): void {
    // If a ScrollSpy instance already exists, destroy it before re-initializing
    if (this.scrollSpy) this.destroyScrollSpy();

    // ScrollSpy takes a selector for the nav container (resolved with `document.querySelector`), so scope it
    // to this host with a unique attribute (the host has no class of its own, and class lists can contain several entries).
    this.elementRef.nativeElement.setAttribute('data-scrollspy-id', this.scrollSpyId);
    const navSelector = `[data-scrollspy-id="${this.scrollSpyId}"]`;

    // ScrollSpy tracks the nav links matching `navItemSelector` inside that container and maps each link's
    // `#fragment` (also `/route#fragment`, as rendered by routerLink) to the heading with that id.
    // It adds the `active` class to the link's closest `li`, which the template styles rely on.
    this.scrollSpy = new ScrollSpy(navSelector, {
      navItemSelector: 'a[href*="#"]',
      offset: 64, // Adjust this value based on your fixed header height
      reflow: true,
    });
  }

  /**
   * Destroy the current scroll spy instance.
   * @private - This method is private and should not be accessed outside of this class
   */
  private destroyScrollSpy(): void {
    if (this.scrollSpy) {
      this.scrollSpy.destroy(); // Removes listeners and the active class
      this.scrollSpy = undefined; // Clear the reference
    }
  }
}
