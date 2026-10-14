import { defineConfig } from 'vitest/config';

// Consumed by the `@angular/build:unit-test` builder (angular.json `runnerConfig` of the demo project).
// The builder sets the Vitest root to the workspace root, so paths are workspace-relative.
// No coverage: the demo suite is an essential smoke check of the built library, not a coverage target.
export default defineConfig({
  test: {
    // DOM environment for non-browser runs.
    environment: 'jsdom',
    // Spies and mocks are restored after every test.
    restoreMocks: true,
    // Each spec file gets a fresh module graph. Without it, files sharing a worker (e.g. on a 2-core CI agent) reuse
    // modules already imported by an earlier file, and a later `vi.mock` (scrollspy-nav spec) no longer applies.
    isolate: true,
  },
});
