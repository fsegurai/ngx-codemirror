import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  input,
  inject
} from '@angular/core';
import { RouterLink } from '@angular/router';
import Gumshoe from 'gumshoejs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-scrollspy-nav',
  templateUrl: './scrollspy-nav.component.html',
  styleUrls: ['./scrollspy-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink
  ]
})
export class ScrollspyNavComponent implements OnChanges, OnDestroy {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private zone = inject(NgZone);

  readonly headings = input<Element[]>();

  private scrollSpy: Gumshoe | undefined;

  /**
   * Handle changes to the `headings` input.
   * @param changes - The changes to the input properties.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['headings']?.currentValue) {
      this.setScrollSpy();
    }
  }

  /**
   * Destroy the scroll spy instance when the component is destroyed.
   */
  ngOnDestroy(): void {
    this.destroyScrollSpy();
  }

  /**
   * Destroy the current scroll spy instance.
   */
  destroyScrollSpy(): void {
    if (this.scrollSpy) {
      this.scrollSpy.destroy();
    }
  }

  /**
   * Set up the scroll spy for the current component.
   * This method should be called after the headings have been initialized.
   */
  setScrollSpy(): void {
    if (this.scrollSpy) {
      this.scrollSpy.setup();
      return;
    }
    this.zone.onStable
      .pipe(first())
      .subscribe(() => {
        const hostElement = this.elementRef.nativeElement;
        const linkSelector = `${ hostElement.tagName }.${ hostElement.className } a`;
        this.scrollSpy = new Gumshoe(linkSelector, { offset: 64, reflow: true });
      });
  }

  /**
   * Sanitize HTML content by removing all HTML tags (any content starting and ending with <>) and returning only text content.
   * @param html - HTML content to sanitize.
   */
  sanitizeInnerHTML(html: string): string {
    return html.replace(/<[^>]+>/g, '');
  }
}
