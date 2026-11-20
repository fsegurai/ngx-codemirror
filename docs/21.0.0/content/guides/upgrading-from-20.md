---
label: Upgrading from 20.x
description: Move an application from @fsegurai/ngx-codemirror 20.x to 21.0.0.
order: 3
tags: [ "guides", "upgrade" ]
keywords: [ "Angular 21", "zone.js", "zoneless", "breaking changes" ]
---

# Upgrading from 20.x

The public API of 21.0.0 is the same as 20.0.0: the same components, selectors, inputs, outputs, module and types.
Only the peer dependencies changed.

| Area | 20.0.0 | 21.0.0 |
|------|--------|--------|
| Angular peers (`common`, `core`, `platform-browser`) | `^20.0.4` | `^21.0.0` |
| `zone.js` peer | `~0.15.1` | removed |
| `@codemirror/merge` dependency | `^6.10.2` | `^6.12.2` |
| `@codemirror/language-data` dependency | `^6.5.1` | `^6.5.2` |

The diff editor's internal comparisons changed from `==` to `===`; behavior is otherwise unchanged.

## Checklist

- [ ] Update the application to Angular 21 (`ng update @angular/core@21 @angular/cli@21`).
- [ ] Install `@fsegurai/ngx-codemirror@21`.
- [ ] Optional: switch to `provideZonelessChangeDetection()` and remove `zone.js`.
- [ ] No template or TypeScript changes are needed for the editors.
