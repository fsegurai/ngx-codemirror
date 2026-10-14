import { ChangeDetectionStrategy, Component, ElementRef, inject, type OnInit, signal } from '@angular/core';
import { MarkdownComponent } from '@fsegurai/ngx-markdown';
import { ScrollspyNavLayoutComponent } from '@shared/scrollspy-nav-layout';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrl: './render.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownComponent, ScrollspyNavLayoutComponent],
})
export default class RenderComponent implements OnInit {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly headings = signal<Element[] | undefined>(undefined);

  ngOnInit(): void {
    this.stripContent();
    this.setHeadings();
  }

  /**
   * Strip the content of the Markdown to remove the first two paragraphs and the table of contents
   * @private - This method is private and should not be accessed outside of this class
   */
  private stripContent(): void {
    this.elementRef.nativeElement
      .querySelector('ngx-markdown')!
      .querySelectorAll(
        'ngx-markdown > p:nth-child(-n + 2), #ngx-markdown, #table-of-contents + ul, #table-of-contents',
      )
      .forEach((x) => {
        x.remove();
      });
  }

  /**
   * Set the headings for the scrollspy
   * @private - This method is private and should not be accessed outside of this class
   */
  private setHeadings(): void {
    this.headings.set(
      Array.from(this.elementRef.nativeElement.querySelectorAll('h2')).map((heading) => {
        if (!heading.id) heading.id = heading.textContent!.toLowerCase().replace(/\s/g, '-');
        return heading;
      }),
    );
  }
}
