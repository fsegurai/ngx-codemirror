import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MarkdownComponent, MarkdownService, MarkedToken } from 'ngx-markdown';
import { ScrollspyNavLayoutComponent } from '@shared/scrollspy-nav-layout';

@Component({
    selector: 'app-rerender',
    templateUrl: './rerender.component.html',
    styleUrls: ['./rerender.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FlexModule,
        FormsModule,
        MarkdownComponent,
        MatFormFieldModule,
        MatInputModule,
        ScrollspyNavLayoutComponent,
    ]
})
export default class RerenderComponent implements OnInit, OnDestroy {

  // property to handle override as per marked documentation, if a renderer
  // function returns `false` it will fall back to previous implementation
  headings: Element[] | undefined;
  markdown = `## Markdown rules!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
  - Unordered list
  - Another unordered bullet point

### Blockquote
> Blockquote to the max`;
  // https://marked.js.org/using_pro#renderer
  private overrideEnabled = false;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private markdownService: MarkdownService,
  ) {
  }

  private _accentColor = '';

  get accentColor(): string {
    return this._accentColor;
  }

  set accentColor(value: string) {
    if (this._accentColor === value) {
      return;
    }
    this._accentColor = value;
    this.changeAccentColor();
  }

  ngOnInit(): void {
    this.setHeadings();
  }

  ngOnDestroy(): void {
    this.resetRenderer();
  }

  private changeAccentColor(): void {
    const styleAttribute = this.accentColor
      ? ` style="color: ${this.accentColor}"`
      : '';

    this.overrideRenderer(styleAttribute);

    this.markdownService.reload();
  }

  private overrideRenderer(styleAttribute: string): void {
    this.overrideEnabled = true;

    this.markdownService.renderer.heading = ({text, depth}: MarkedToken.Heading): string => {
      if(this.overrideEnabled) {
        const parsedText = this.markdownService.parseInline(text); // Parse inline Markdown text to HTML
        return `<h${depth}${styleAttribute}>${parsedText}</h${depth}>`;
      }

      return false as unknown as string;
    }
  }

  private resetRenderer(): void {
    this.overrideEnabled = false;
  }

  private setHeadings(): void {
    const headings: Element[] = [];
    this.elementRef.nativeElement
      .querySelectorAll('h2')
      .forEach(x => headings.push(x));
    this.headings = headings;
  }
}
