import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  ElementRef,
  inject,
  type OnInit,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { type Route, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { isTheme, Theme } from '@app/app.models';
import { AnchorService } from '@shared/anchor';
import { DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(window:scroll)': 'onWindowScroll()',
  },
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgOptimizedImage,
  ],
})
export class AppComponent implements OnInit {
  private readonly document = inject<Document>(DOCUMENT);
  private readonly anchorService = inject(AnchorService);
  private readonly router = inject(Router);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected routes: Route[];
  protected readonly theme = signal<Theme>(DEFAULT_THEME);

  readonly tabHeader = viewChild('tabHeader', { read: ElementRef });

  private readonly stickyClassName = 'mat-mdc-tab-nav-bar--sticky';

  constructor() {
    this.routes = this.router.config.filter((route) => route.data && route.data['label']);
  }

  onDocumentClick(event: Event): void {
    this.anchorService.interceptClick(event);
  }

  onWindowScroll(): void {
    const tabHeaderValue = this.tabHeader();
    if (tabHeaderValue == null) return;

    const tabHeader = tabHeaderValue.nativeElement;
    const tabHeaderOffset = Math.ceil(tabHeader.offsetTop);
    const windowOffset = Math.ceil(this.document.defaultView?.scrollY ?? 0);
    const hasStickyClass = tabHeader.classList.contains(this.stickyClassName);

    if (!hasStickyClass && windowOffset >= tabHeaderOffset) tabHeader.classList.add(this.stickyClassName);
    if (hasStickyClass && windowOffset < tabHeaderOffset) tabHeader.classList.remove(this.stickyClassName);
  }

  ngOnInit(): void {
    this.anchorService.setOffset([0, 64]);

    // The theme lives in localStorage and on <body>, both browser-only. The index.html markup has no theme class:
    // the inline script in index.html applies the stored theme before the app boots, so there is no flash.
    if (!this.isBrowser) return;

    const storedTheme = this.readStoredTheme();
    this.setTheme(isTheme(storedTheme) ? storedTheme : DEFAULT_THEME);
  }

  handleFragment(): void {
    this.anchorService.scrollToAnchor();
  }

  /**
   * Scroll to the URL fragment once the routed page has finished its enter animation.
   * Animation end events bubble from nested elements, so only the routed page itself is handled.
   * @param event The animation end event.
   */
  onRouteAnimationEnd(event: AnimationEvent): void {
    if (event.target instanceof Element && event.target.parentElement === event.currentTarget) {
      this.handleFragment();
    }
  }

  /**
   * Toggle the theme between light and dark.
   */
  toggleTheme(): void {
    this.setTheme(this.theme() === Theme.Light ? Theme.Dark : Theme.Light);
  }

  /**
   * Set the theme and save it to local storage.
   * @param theme The theme to set.
   * @private - This method is private and should not be accessed outside of this class
   */
  private setTheme(theme: Theme): void {
    this.theme.set(theme);
    const bodyClassList = this.document.querySelector('body')!.classList;
    const removeClassList = /\w*-theme\b/.exec(bodyClassList.value);

    if (removeClassList) bodyClassList.remove(...removeClassList);

    bodyClassList.add(`${theme}-theme`);

    try {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    } catch {
      // Storage can be unavailable (private mode, blocked site data); the theme still applies for this visit.
    }
  }

  /**
   * Read the stored theme, tolerating unavailable storage.
   * @private - This method is private and should not be accessed outside of this class
   */
  private readStoredTheme(): string | null {
    try {
      return localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    } catch {
      return null;
    }
  }
}
