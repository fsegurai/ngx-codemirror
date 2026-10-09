import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  provideZonelessChangeDetection,
  signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ScrollspyNavComponent } from './scrollspy-nav.component';

// ScrollSpy measures layout and listens to scroll; only the nav scope it receives matters here.
const scrollSpy = vi.hoisted(() => ({ calls: [] as { selector: string; navItemSelector?: string }[] }));
vi.mock('@fsegurai/scrollspy', () => ({
  default: class {
    constructor(selector: string, options: { navItemSelector?: string } = {}) {
      scrollSpy.calls.push({ selector, navItemSelector: options.navItemSelector });
    }

    destroy(): void {}
  },
}));

@Component({
  selector: 'app-scrollspy-host',
  template: '<app-scrollspy-nav [headings]="headings()" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollspyNavComponent],
})
class ScrollspyHost {
  readonly headings = signal<Element[] | undefined>(undefined);
}

function heading(id: string, text: string): Element {
  const element = document.createElement('h2');
  element.id = id;
  element.textContent = text;
  return element;
}

describe('ScrollspyNavComponent', () => {
  beforeEach(() => {
    scrollSpy.calls.length = 0;
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection(), provideRouter([])] });
  });

  it('scopes ScrollSpy to a valid nav selector whose items are only its own links', async () => {
    const fixture = TestBed.createComponent(ScrollspyHost);
    fixture.componentInstance.headings.set([heading('first', 'First'), heading('second', 'Second')]);
    await TestBed.inject(ApplicationRef).whenStable();
    // ScrollSpy is created in a microtask after the headings effect runs.
    await Promise.resolve();

    expect(scrollSpy.calls).toHaveLength(1);
    const [{ selector, navItemSelector }] = scrollSpy.calls;
    // Regression: the selector used to be `${tagName}.${className} a`, i.e. `APP-SCROLLSPY-NAV. a`, which throws.
    expect(() => document.querySelectorAll(selector)).not.toThrow();
    // ScrollSpy resolves the nav with `document.querySelector`, so the selector must match exactly this component.
    const navs = document.querySelectorAll(selector);
    expect(navs).toHaveLength(1);
    expect(navs[0]).toBe(fixture.nativeElement.querySelector('app-scrollspy-nav'));
    // ...and its nav items (the library default is `a[href*="#"]`) are exactly this component's links.
    const links = navs[0].querySelectorAll(navItemSelector ?? 'a[href*="#"]');
    expect(links).toHaveLength(2);
    expect(Array.from(links, (link) => link.textContent)).toEqual(['First', 'Second']);
  });
});
