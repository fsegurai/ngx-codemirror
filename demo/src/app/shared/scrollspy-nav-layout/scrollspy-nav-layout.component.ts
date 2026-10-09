import { ChangeDetectionStrategy, Component, DOCUMENT, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MarkdownComponent } from '@fsegurai/ngx-markdown';
import { ScrollspyNavComponent } from '@shared/scrollspy-nav';

@Component({
  selector: 'app-scrollspy-nav-layout',
  templateUrl: './scrollspy-nav-layout.component.html',
  styleUrl: './scrollspy-nav-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
  imports: [MarkdownComponent, MatButtonModule, MatDividerModule, ScrollspyNavComponent],
})
export class ScrollspyNavLayoutComponent {
  private readonly document = inject(DOCUMENT);

  readonly headings = input<Element[]>();

  readonly displayTOC = input<boolean>(true);

  protected readonly showScrollUpButton = signal(false);

  onWindowScroll(): void {
    this.showScrollUpButton.set(Math.ceil(this.document.defaultView?.scrollY ?? 0) > 64);
  }

  onScrollUp(): void {
    this.document.defaultView?.scrollTo(0, 0);
    this.document.location.hash = '';
  }
}
