import { HttpClient, provideHttpClient } from '@angular/common/http';
import { type ApplicationConfig, provideZonelessChangeDetection, SecurityContext } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from '@app/app.routes';
import { DEMO_PRESETS } from '@app/constants/const-codemirror-extensions';
import { bundleThemeLoaders, DARK_EDITOR_THEME, LIGHT_EDITOR_THEME } from '@app/constants/const-codemirror-themes';
import { markedOptionsFactory } from '@app/marked-options-factory';
import {
  MARKED_EXTENSIONS,
  MARKED_OPTIONS,
  provideMarkdown,
  withClipboard,
  withEmoji,
  withPrism,
} from '@fsegurai/ngx-markdown';
import { AnchorService } from '@shared/anchor/anchor.service';
import { ClipboardButtonComponent } from '@shared/clipboard-button';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { provideCodeEditor, withExtensionPresets, withThemes } from 'ngx-codemirror';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideMarkdown({
      loader: HttpClient,
      // Every optional feature is a plugin: Prism highlights the code blocks (the Prism global loaded in angular.json),
      // Emoji renders the `[emoji]` shortnames, and Clipboard gives the code blocks the demo copy button
      plugins: [withPrism(), withEmoji(), withClipboard({ buttonComponent: ClipboardButtonComponent })],
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markedOptionsFactory,
        deps: [AnchorService],
      },
      markedExtensions: [
        {
          provide: MARKED_EXTENSIONS,
          useFactory: gfmHeadingId,
          multi: true,
        },
      ],
      sanitize: SecurityContext.NONE,
    }),
    // Every editor of the demo: the bundle themes (lazy, by name), 'auto' mapped to the GitHub themes, and the
    // playground presets. The app light/dark toggle sets the editors' theme through CodeEditorThemeService.
    provideCodeEditor(
      { theme: 'auto' },
      withThemes(bundleThemeLoaders(), { light: LIGHT_EDITOR_THEME, dark: DARK_EDITOR_THEME }),
      withExtensionPresets(DEMO_PRESETS),
    ),
  ],
};
