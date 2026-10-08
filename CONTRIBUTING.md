# 🙌 Contributing to ngx-codemirror

Thanks for your interest in improving the **ngx-codemirror** project! Whether it's fixing bugs, improving documentation, or suggesting new features—your help is welcome 🙏

---

## 🚀 Getting Started

> **Requirements**
> Ensure you're using **Node.js v24.x** and **Bun v1.4.x** or higher.

### 1. Clone the Repository

```bash
git clone https://github.com/fsegurai/ngx-codemirror.git
cd ngx-codemirror
```

### 2. Install Dependencies

```bash
bun install
```

`bun install` also runs the `prepare` script, which installs the Husky Git hooks (see [Linting](#-linting)).

### 3. Build the Library

```bash
bun run build:lib
```

The library is built with `ng-packagr` into `dist/lib`. `build:lib` first runs `check:lib-imports`, which fails if
`lib/` imports `ngx-codemirror`, `@fsegurai/ngx-codemirror`, `@app/` or `@shared/`: ng-packagr does not rewrite path
aliases, so library sources must use relative imports only.

### 4. Start Development Server

```bash
bun run start
```

This runs `ng build lib --watch` and `ng serve demo` side by side (with `concurrently`). The dev server waits for the
first library build before it starts.

The demo imports `ngx-codemirror`, which the root `tsconfig.json` maps to the **built** library in `dist/lib`, not to
`lib/src`. The demo therefore consumes exactly what gets published (the package.json `exports` and the FESM bundle).
That is why every script that builds or type-checks the demo needs `dist/lib`:

- `build:demo` (and `build:all`) always runs `build:lib` first.
- `type-check:demo`, `test-local:demo` and `test-ci_cd:demo` run `ensure:lib`, which builds the library only when
  `dist/lib` is missing. Run `bun run build:lib` after library changes to type-check or test the demo against fresh
  output (`bun run start` keeps `dist/lib` up to date while it runs).

---

## 🧪 Running Tests

Tests run with **Vitest** (jsdom environment) through the Angular CLI `@angular/build:unit-test` builder. The
library is zoneless, so specs use `await fixture.whenStable()` and Vitest fake timers (`vi.useFakeTimers()`) instead
of `fakeAsync`/`tick`. Library specs import the components through relative paths, because the `ngx-codemirror`
alias points to `dist/lib`.

To run the test suite in watch mode:

```bash
bun run test-local:lib
```

To run the tests once (as the CI pipeline does); JUnit results are written to `junit.xml`:

```bash
bun run test-ci_cd:lib
```

### 📊 Coverage

To run the tests once with a coverage report (LCOV at `coverage/lcov.info`):

```bash
bun run test-ci_cd:coverage:lib
```

### 🧩 Demo Smoke Tests

The demo has a small smoke suite (`demo/src/**/*.spec.ts`, same builder, `demo/vitest.config.ts`) that checks the
library works through the demo: it imports `ngx-codemirror` from the **built** `dist/lib` and uses the demo's own
providers (`app.config.ts`). It is not an exhaustive suite: keep it to essential checks (app component, routes, code
editor rendering, scrollspy navigation). Both scripts run `ensure:lib` first, which builds the library only when
`dist/lib` is missing, so run `bun run build:lib` after library changes:

```bash
bun run test-local:demo   # watch mode
bun run test-ci_cd:demo   # single run; JUnit results are written to junit-demo.xml
```

The demo report has its own file so it never overwrites the library's `junit.xml`; the PR pipeline publishes both.

### 🔎 Type Checking

```bash
bun run type-check:lib
bun run type-check:demo
```

---

## 🧼 Linting

> Linting is enforced as part of the CI pipeline. Please ensure your code is clean before pushing:

```bash
bun run lint
bun run format:audit   # Read-only check (Biome, covers lint + format)
```

You can also lint specific parts:
- Demo: `bun run lint:demo`
- Library: `bun run lint:lib`

Run `bun run lint:fix` to auto-fix formatting issues before committing (it is the same command as `format`).

`bun run lint:check` is the read-only check the PR pipeline runs.

### 🪝 Git Hooks

[Husky](https://typicode.github.io/husky/) installs two hooks when you run `bun install`:

- `pre-commit` runs `bun run lint:fix` and re-stages the tracked files it changed.
- `pre-push` runs `bun run format:audit` and blocks the push if Biome reports errors.

---

## 📦 Project Structure

This project is an Angular workspace with two projects:

- `lib/` - The `@fsegurai/ngx-codemirror` library
  - `src/code-editor/` - `CodeEditorComponent`
  - `src/code-diff-editor/` - `CodeDiffEditorComponent`
  - `src/configuration/` - Shared editor types (themes, setup, diff orientation, revert controls)
  - `public_api.ts` - Public API entry point
  - `vitest.config.ts` - Vitest configuration used by the `test` target
- `demo/` - The demo application that showcases the library
  - `src/app/` - Demo pages (get started, playground, render)
  - `vitest.config.ts`, `tsconfig.spec.json` - Configuration of the demo smoke tests
  - `public/` - Static assets (icons and images)

### Post Build Steps

Once you've finished working on the library, run the following to build and verify your changes:

```bash
bun run build:demo       # builds the library first, then the demo
bun run build_post:lib   # copies README.md and LICENSE into dist/lib
bun run build_post:demo  # copies index.html to 404.html (SPA fallback) and the third-party licenses into dist/demo/browser
```

---

## ✍️ Commit Message Convention

This project follows **[Conventional Commits](https://www.conventionalcommits.org/)**.

| Type        | Description                           |
|-------------|---------------------------------------|
| `feat:`     | New feature                           |
| `fix:`      | Bug fix                               |
| `docs:`     | Documentation only changes            |
| `refactor:` | Code refactoring (no behavior change) |
| `perf:`     | Performance or dependency upgrades    |
| `test:`     | Adding or fixing tests                |
| `chore:`    | Maintenance tasks, build config       |
| `ci:`       | CI pipeline changes                   |
| `del:`      | File or code removal                  |

Example:

```bash
git commit -m "feat: add read-only mode to the diff editor"
```

---

## 🔀 Submitting a Pull Request

Day-to-day work happens on the `development` branch; `main` holds released code.

Please follow these steps to ensure a smooth review:

1. **Merge** the latest changes from `development` into your branch:
   ```bash
   git checkout development
   git pull origin development
   git checkout your-feature-branch
   git merge development
   ```

2. Make sure all tests pass:
   ```bash
   bun run test-ci_cd:lib
   bun run test-ci_cd:demo
   ```

3. Lint, type-check, build and verify your changes:
   ```bash
   bun run lint:check
   bun run type-check:lib
   bun run type-check:demo
   bun run build:lib
   bun run build:demo
   ```

4. If you've added functionality:
    - Include **unit tests**.
    - Update the **README.md** or relevant documentation.
    - Add a demo example if applicable.

5. Reference any related issues in your PR comment:
   > Example: _"Closes #12"_

6. Ensure your PR title follows the **conventional commit** format.

---

## 🐛 Reporting Bugs

When submitting a bug report, please include:

- A **clear description** of the issue.
- The **expected vs actual behavior**.
- A **minimal reproducible example** (CodeSandbox or StackBlitz is ideal).
- Details about:
    - Browser(s) and OS
    - Node and Bun versions
    - Angular version
    - ngx-codemirror version
    - CodeMirror packages and versions (`codemirror`, `@codemirror/merge`, language or theme packages)
    - Which component is affected (`CodeEditorComponent` or `CodeDiffEditorComponent`)

---

## 💬 Need Help?

Open a [discussion](https://github.com/fsegurai/ngx-codemirror/discussions)
or [create an issue](https://github.com/fsegurai/ngx-codemirror/issues) and we'll do our best to assist!

---

Thanks for contributing to ngx-codemirror! ✨
