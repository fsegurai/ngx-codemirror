import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CodeEditorComponent } from "ngx-codemirror";
import { FlexModule } from '@angular/flex-layout/flex';
import { ScrollspyNavLayoutComponent } from '@shared/scrollspy-nav-layout';

@Component({
  selector: 'app-playground',
  imports: [
    CodeEditorComponent,
    FlexModule,
    ScrollspyNavLayoutComponent,
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PlaygroundComponent implements OnInit, OnDestroy {
  // property to handle override as per marked documentation, if a renderer
  // function returns `false` it will fall back to previous implementation
  headings: Element[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.headings = undefined;
  }

}
