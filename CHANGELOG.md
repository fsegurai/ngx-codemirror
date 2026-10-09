# 📦 Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)

---

## [Unreleased]

No changes have been made yet.

---

## [21.0.0] - 2026-10-09

### ⚠️ BREAKING CHANGES ⚠️

- **Angular 21** — the library peer dependencies (`@angular/common`, `@angular/core`, `@angular/platform-browser`)
  now require `^21.0.0`. **(Note**: This change is not backward compatible.)
- **Zoneless** — the `zone.js` peer dependency has been removed. The library is zoneless-compatible and works with
  `provideZonelessChangeDetection()`; the demo application now runs fully zoneless.

### 🐞 Fixes

- **Code diff editor** — loose equality (`==`) comparisons replaced with strict equality (`===`).
- **Demo** — the scrollspy navigation is initialized from a signal `effect` instead of `NgZone.onStable`, which never
  fires in zoneless applications.
- **Demo accessibility** — icon-only buttons now declare `aria-label` and `type="button"`, and decorative SVG icons are
  marked `aria-hidden="true"`.
- **Demo** — the Get Started page prepares the README text before rendering instead of editing the rendered DOM, so a
  highlighting failure no longer leaves the intro and table of contents visible or the side navigation empty.
- **Demo** — when `README.md` cannot be loaded (the error is logged) or is empty, the Get Started page shows a fallback
  message with a link to the README on GitHub, instead of an empty page.
- **Demo** — restore the TypeScript grammar extension in `demo/src/prism.ts`. With the version shipped in 20.0.0, Prism
  threw `patternObj.inside` errors on `typescript` code blocks, so those blocks and every block after them stayed
  unhighlighted.

### 🔧 Changes

- **TypeScript** — upgraded to TypeScript `5.9`.
- **Build scripts** — `build_post:lib` and `build_post:demo` pass directory destinations with a trailing `/`, as
  required by `cpy-cli` 7. `build_post:demo` copies `index.html` to `404.html` (SPA fallback for static hosts) and the
  third-party licenses into `dist/demo/browser`.
- **Demo base href** — `build:demo` reads the base href from `DEMO_BASE_HREF` (default `/`). The release pipeline
  rebuilds the demo for GitHub Pages with `/ngx-codemirror/`; Appwrite and GitLab Pages serve it at the domain root.
- **Tests** — replace Karma and Jasmine with Vitest through the `@angular/build:unit-test` builder (jsdom). The specs
  import the library through relative paths. JUnit results are written to `junit.xml` and LCOV coverage to
  `coverage/lcov.info` (`test-ci_cd:coverage:lib`).
- **Workspace** — the demo consumes the **built** library: the root `tsconfig.json` maps `ngx-codemirror` to
  `dist/lib` (replacing `linklocal` and the `file:lib` dependency), so it exercises the published package. `start`
  runs the library watch build (`watch:lib`, formerly `watch`) and the demo dev server together, and `build:demo`
  builds the library first. `ensure:lib` builds the library only when `dist/lib` is missing.
- **Library imports guard** — `check:lib-imports` (run by `build:lib`) fails when `lib/` uses aliased or self imports,
  which ng-packagr does not rewrite.
- **Library packaging** — `allowedNonPeerDependencies` in `ng-package.json` now lists the real dependencies
  (`@codemirror/language-data`, `@codemirror/merge`, `codemirror`) instead of the stale `@codemirror/theme-one-dark`.
- **Demo** — upgraded to `@fsegurai/ngx-markdown` `21.0.1`, with `marked`
  `18.0.14` as a direct dependency.
- **Demo** — remove `provideAnimations()`; the route transition is a CSS keyframe and the scroll-up buttons use the
  native `animate.enter` / `animate.leave`.
- **Demo** — remove `@angular/flex-layout` (replaced with plain CSS flex and breakpoint mixins) and `hammerjs`.
- **Demo** — replace `gumshoejs` with [`@fsegurai/scrollspy`](https://github.com/fsegurai/scrollspy) for the table of
  contents navigation.
- **Demo** — the playground state, page headings and theme use signals instead of plain fields with manual change
  detection.
- **Demo** — `.browserslistrc` updated to the Angular 21 baseline.
- **Demo tests** — add an essential Vitest smoke suite for the demo (`test-ci_cd:demo`, `test-local:demo`) that
  checks the built library through the demo: app component, routes, code editor rendering and the scrollspy
  navigation. JUnit results are written to `junit-demo.xml`.

### 📝 Documentation

- **Contributing guide** — add `CONTRIBUTING.md` covering setup, the `lib/` and `demo/` layout, tests, linting,
  commit conventions and the pull request flow.
- **Changelog** — add this `CHANGELOG.md`.
- **README** — add a Compatibility section (Angular 21 → 21.x) noting zoneless support.

### 🔧 Infrastructure

- **Linting** — replace ESLint with Biome: add `lint:check`, `lint:fix`, `format` and `format:audit` scripts, and run
  `lint`, `lint:lib` and `lint:demo` through Biome; remove the ESLint configs, the lint targets and schematic
  collections from `angular.json`, and the ESLint-only dev dependencies.
- **Git hooks** — add Husky `pre-commit` (`lint:fix`) and `pre-push` (`format:audit`) hooks to enforce linting and
  formatting before changes leave the workstation.
- **CI** — the GitHub build workflow calls the existing `build:lib`, `build_post:lib`, `build:demo` and
  `build_post:demo` scripts; the test workflow also runs the demo smoke tests; the checks workflow was aligned with
  the sibling libraries.
- **Azure DevOps pipelines** — add the ADO build, PR, and release pipelines and the Appwrite Terraform infrastructure
  for the demo site under `pipelines/`.
- **Engines** — the workspace `package.json` declares `engines` (`node >=24`, `bun >=1.4.0`, `npm >=11`). The
  published library does not declare engines.
- **Bun** — add `bunfig.toml` with the `[install]` settings only (tests run through the Angular CLI).

### 🔐 Security

- **Supply chain** — `bunfig.toml` only installs package versions published at least 3 days ago
  (`minimumReleaseAge`); first-party `@fsegurai/ngx-markdown` is excluded.
- **Added dependencies**.
    - Dependencies
        - `@fsegurai/scrollspy` - `^2.1.0` - needed for the demo table of contents navigation. Replaces `gumshoejs`.
        - `marked` - `18.0.14` - peer dependency of `@fsegurai/ngx-markdown` 21, used by the demo.
    - Dev Dependencies
        - `@biomejs/biome` - `2.5.15` - needed for linting and formatting - replaces ESLint toolchain.
        - `@vitest/coverage-v8` - `^4` - needed for test coverage reports (LCOV).
        - `concurrently` - `^10.0.5` - needed for local development. Runs the library watch build and the demo dev
          server together.
        - `husky` - `^9.1.7` - needed for Git hooks to enforce code quality and pre-commit checks.
        - `jsdom` - `^30.1.2` - needed for testing purposes only. DOM environment for Vitest.
        - `vitest` - `^4` - needed for unit and smoke tests. Replaces Karma and Jasmine.
- **Update dependencies** — address potential vulnerabilities and/or improvements in dependencies.
    - Peer Dependencies (`@fsegurai/ngx-codemirror`)
        - `@angular/common`, `@angular/core`, `@angular/platform-browser` from `^20.0.4` to `^21.0.0`
    - Dependencies
        - `@angular/cdk` from `^20.0.3` to `^21.2.14`
        - `@angular/common` from `^20.0.4` to `^21.2.25`
        - `@angular/compiler` from `^20.0.4` to `^21.2.25`
        - `@angular/core` from `^20.0.4` to `^21.2.25`
        - `@angular/forms` from `^20.0.4` to `^21.2.25`
        - `@angular/material` from `^20.0.3` to `^21.2.14`
        - `@angular/platform-browser` from `^20.0.4` to `^21.2.25`
        - `@angular/router` from `^20.0.4` to `^21.2.25`
        - `@codemirror/language-data` from `^6.5.1` to `^6.5.2`
        - `@codemirror/merge` from `^6.10.2` to `^6.12.2`
        - `@fsegurai/codemirror-theme-bundle` from `6.2.0` to `6.4.4`
        - `@fsegurai/ngx-markdown` from `^20.0.0` to `^21.0.1`
        - `emoji-toolkit` from `^9.0.1` to `^11.0.0`
        - `marked-gfm-heading-id` from `^4.1.1` to `^4.1.4`
    - Dev Dependencies
        - `@angular/build` from `^20.0.3` to `^21.2.24`
        - `@angular/cli` from `~20.0.3` to `~21.2.24`
        - `@angular/compiler-cli` from `^20.0.4` to `^21.2.25`
        - `@angular/language-service` from `^20.0.4` to `^21.2.25`
        - `cpy-cli` from `^5.0.0` to `^7.0.0`
        - `ng-packagr` from `^20.0.1` to `^21.2.7`
        - `typescript` from `~5.8.3` to `~5.9.3`
- **Removed dependencies** — reduce the dependency surface.
    - Peer Dependencies (`@fsegurai/ngx-codemirror`)
        - `zone.js` - the library is zoneless-compatible.
    - Dependencies
        - `@angular/animations` - replaced by native `animate.enter` / `animate.leave` and CSS.
        - `@angular/flex-layout` - deprecated and unmaintained; replaced by plain CSS.
        - `@angular/platform-browser-dynamic` - deprecated and unused.
        - `gumshoejs` - replaced by `@fsegurai/scrollspy`.
        - `hammerjs` - unused.
        - `zone.js` - the demo runs zoneless.
        - `ngx-codemirror` (`file:lib`) - the demo consumes the built library through a `tsconfig` path.
    - Dev Dependencies
        - ESLint toolchain: `@eslint/js`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`,
          `@typescript-eslint/types`, `@typescript-eslint/utils`, `angular-eslint`, `eslint`,
          `eslint-formatter-checkstyle`, `eslint-import-resolver-typescript`, `eslint-plugin-import`,
          `typescript-eslint` - replaced by Biome.
        - Karma/Jasmine toolchain: `@chiragrupani/karma-chromium-edge-launcher`, `@types/jasmine`, `jasmine-core`,
          `karma`, `karma-chrome-launcher`, `karma-coverage`, `karma-jasmine`, `karma-jasmine-html-reporter`,
          `karma-junit-reporter` - replaced by Vitest.
        - `linklocal`, `rimraf` - no longer needed for linking the library into the demo.

**Full Changelog**: https://github.com/fsegurai/ngx-codemirror/commits/v21.0.0

---

## [20.0.0] - 2025-07-06

### ⚠️ BREAKING CHANGES ⚠️

- **Angular 20** — upgraded the library to Angular `v20`; the peer dependencies (`@angular/common`, `@angular/core`,
  `@angular/platform-browser`) require `^20.0.4`. **(Note**: This change is not backward compatible.)
- **Peer dependencies** — `@angular/forms` is no longer a peer dependency of the library.

### 🚀 Features

- **Type references** — the editor and diff editor components expose typed inputs and outputs.
- **Editor attributes** — `Theme`, `Setup`, `Orientation`, `RevertControls`, `RenderRevertControl` and
  `DiffEditorModel` types are exported from the public API (`configuration/editor-attributes`).
- **Demo** — new render page, and improved editor and theme visualization in the playground.
- **Project scripts** — new build, lint and Doppler scripts.

### 🐞 Fixes

- **Components** — fixed importing the components in external projects.
- **Demo** — fixed Material style duplication, improved overall performance, styles, and Prism formatting.
- **Tests** — fixed unit tests and lint formatting.
- **Templates** — migrated to self-closing tags.

### 🔧 Changes

- **Signals** — migrated the components to signal inputs.
- **CI/CD** — removed the old ADO pipeline setup file and the GitHub release workflows.

### 📝 Documentation

- **README** — improved information and usage documentation, including the render page.

### 🔐 Security

- **Dependencies** — upgraded library versions.

**Full Changelog**: https://github.com/fsegurai/ngx-codemirror/compare/v19.2.0...v20.0.0

---

## [19.2.0] - 2025-03-03

### 🚀 Features

- **Demo** — new languages support for the demo.
- **Browser support** — added browser support configuration.
- **Azure DevOps** — added an ADO workflow.
- **IDE** — added an IDE configuration file.

### 🐞 Fixes

- **Code editor** — improved logic and validations.
- **Demo** — fixed the editor component demo.
- **Lint** — fixed ESLint formatting.

### 🔧 Changes

- **Code editor** — refactored the code editor component.
- **Demo** — refactored the theme display names.
- **License** — updated the license.

### 🔐 Security

- **Dependencies** — upgraded library versions.

**Full Changelog**: https://github.com/fsegurai/ngx-codemirror/compare/v19.1.0...v19.2.0

---

## [19.1.0] - 2024-12-06

### 🐞 Fixes

- **Demo** — improved the TOC rendering and optimized the playground imports.
- **Lint** — fixed ESLint formatting.

### 🔧 Changes

- **Signals** — migrated to signals for inputs, outputs, service injection, and the control flow syntax.

### 🔐 Security

- **Dependencies** — upgraded library versions.

**Full Changelog**: https://github.com/fsegurai/ngx-codemirror/compare/v19.0.0...v19.1.0

---

## [19.0.0] - 2024-12-06

### 🚀 Features

- **Languages** — new languages support.
- **Demo** — complete demonstration of the editor components.

### 🐞 Fixes

- **Editors** — improved editor validations and removed previous limitations.
- **Demo** — improved the demo and the README.
- **Registry** — fixed the packages registry configuration.
- **Lint** — fixed ESLint errors.

### 🔧 Changes

- **Project** — updated `.gitignore` for JetBrains IDEs.

**Full Changelog**: https://github.com/fsegurai/ngx-codemirror/compare/v19.0.0-beta.1...v19.0.0

---

## [19.0.0-beta.1] - 2024-12-03

### 🚀 Features

- **Initial release** — `CodeEditorComponent` and `CodeDiffEditorComponent` built on CodeMirror 6, with a working demo.
- **Demo** — languages demo for playground purposes, and TOC validation based on usage.
- **Logo** — new ngx-codemirror logo.
- **Registry** — new registry scripts.

### 🐞 Fixes

- **Demo** — improved the editor playground and select styles.
- **Imports** — improved imports.
- **CI** — improved pipeline workflows and registry references.
- **Docs** — improved package details and the README.

### 🔧 Changes

- **Project** — refactored the project structure.

**Full Changelog**: https://github.com/fsegurai/ngx-codemirror/commits/v19.0.0-beta.1

---

## ✅ Compatibility

| Angular | @fsegurai/ngx-codemirror |
|---------|--------------------------|
| 21      | 21.x                     |
| 20      | 20.x                     |
| 19      | 19.x                     |

---

[unreleased]: https://github.com/fsegurai/ngx-codemirror/compare/v21.0.0...HEAD

[21.0.0]: https://github.com/fsegurai/ngx-codemirror/compare/v20.0.0...v21.0.0

[20.0.0]: https://github.com/fsegurai/ngx-codemirror/compare/v19.2.0...v20.0.0

[19.2.0]: https://github.com/fsegurai/ngx-codemirror/compare/v19.1.0...v19.2.0

[19.1.0]: https://github.com/fsegurai/ngx-codemirror/compare/v19.0.0...v19.1.0

[19.0.0]: https://github.com/fsegurai/ngx-codemirror/compare/v19.0.0-beta.1...v19.0.0

[19.0.0-beta.1]: https://github.com/fsegurai/ngx-codemirror/commits/v19.0.0-beta.1
