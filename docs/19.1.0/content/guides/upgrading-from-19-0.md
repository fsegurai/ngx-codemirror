---
label: Upgrading from 19.0
description: Move an application from @fsegurai/ngx-codemirror 19.0.x to 19.1.0 and its signal inputs.
order: 3
tags: [ "guides", "upgrade" ]
keywords: [ "19.0.0", "input()", "output()", "OutputEmitterRef" ]
---

# Upgrading from 19.0

19.1.0 migrates most inputs to signal inputs (`input()`) and every output to `output()`. Template bindings do not
change. Code that reads or writes component members directly does.

| Area | 19.0.0 | 19.1.0 |
|------|--------|--------|
| Most inputs | `@Input()` fields | `input()` signals |
| `disabled`, `originalValue`, `modifiedValue` | `@Input()` fields | `@Input()` fields (unchanged) |
| Outputs | `@Output()` `EventEmitter` | `output()` (`OutputEmitterRef`) |
| Element injection | constructor parameter | `inject(ElementRef)` |
| Selectors, input and output names | - | unchanged |
| `view` / `mergeView` fields | public | public (unchanged) |

## What breaks

| You did | Now |
|---------|-----|
| `editor.theme = darkTheme` from TypeScript | Signal inputs are read-only from outside. Bind `[theme]` in the template instead. |
| `const t = editor.theme` | Call it: `editor.theme()`. |
| `editor.change.pipe(...)` | `OutputEmitterRef` has `subscribe()` only. Wrap it with `outputToObservable()` from `@angular/core/rxjs-interop`. |
| `new CodeEditorComponent(elementRef)` in a test | Create it with `TestBed.createComponent()`. |

## Checklist

- [ ] Install `@fsegurai/ngx-codemirror@19.1.0`.
- [ ] Move programmatic input assignments into template bindings.
- [ ] Replace `EventEmitter`-specific calls on the outputs.
