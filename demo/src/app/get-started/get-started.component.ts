import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarkdownComponent } from '@fsegurai/ngx-markdown';
import { HttpRawLoaderService } from '@shared/http-raw-loader';
import { ScrollspyNavLayoutComponent } from '@shared/scrollspy-nav-layout';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { prepareReadme } from './readme';

/** Source of the README rendered on the Get Started page */
const README_URL = 'https://raw.githubusercontent.com/fsegurai/ngx-codemirror/main/README.md';

/** Shown instead of the README when it cannot be loaded or is empty, so the page never ends up empty */
const README_FALLBACK =
  'The README could not be loaded. Read it on [GitHub](https://github.com/fsegurai/ngx-codemirror#readme).';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownComponent, ScrollspyNavLayoutComponent],
})
export default class GetStartedComponent {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private rawLoaderService = inject(HttpRawLoaderService);

  protected readonly headings = signal<Element[] | undefined>(undefined);
  // ? The README is prepared as text, so the rendered output never depends on post-render DOM edits
  // ? A failed fetch is logged and replaced by a fallback message; toSignal would otherwise rethrow it on read
  protected readonly readme = toSignal(
    this.rawLoaderService.get(README_URL).pipe(
      // ? An empty README would render nothing at all, so it gets the fallback message as well
      map((markdown) => prepareReadme(markdown).trim() || README_FALLBACK),
      catchError((error: unknown) => {
        console.error('Failed to load the README', error);
        return of(README_FALLBACK);
      }),
    ),
  );

  /**
   * Log a render failure and still build the navigation: the headings are already in the DOM
   * because the content is written before the post-render plugins (e.g. syntax highlighting) run
   * @param error - The render error emitted by the markdown component
   */
  protected onRenderError(error: string | Error): void {
    console.error('Failed to render the README', error);
    this.setHeadings();
  }

  /**
   * Set the headings for the scrollspy
   */
  protected setHeadings(): void {
    this.headings.set(
      Array.from(this.elementRef.nativeElement.querySelectorAll('h2')).map((heading) => {
        // ! We validate the id, because in some cases the content loaded from an external source does not render the id correctly
        if (!heading.id) heading.id = heading.textContent!.toLowerCase().replace(/\s/g, '-');
        return heading;
      }),
    );
  }
}
