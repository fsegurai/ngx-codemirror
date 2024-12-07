import { ChangeDetectionStrategy, Component, HostListener, input } from '@angular/core';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MarkdownComponent } from '@fsegurai/ngx-markdown';
import { ScrollspyNavComponent } from '@shared/scrollspy-nav';
import { ZOOM_ANIMATION } from './scrollspy-nav-layout.animation';

@Component({
  animations: [ZOOM_ANIMATION],
  selector: 'app-scrollspy-nav-layout',
  templateUrl: './scrollspy-nav-layout.component.html',
  styleUrls: ['./scrollspy-nav-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ExtendedModule,
    FlexModule,
    MarkdownComponent,
    MatButtonModule,
    MatDividerModule,
    ScrollspyNavComponent,
  ]
})
export class ScrollspyNavLayoutComponent {
  readonly headings = input<Element[]>();

  readonly displayTOC = input<boolean>(true);

  protected showScrollUpButton = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollUpButton = Math.ceil(window.scrollY) > 64;
  }

  onScrollUp(): void {
    window.scrollTo(0, 0);
    location.hash = '';
  }
}
