---
label: Accessibility
description: Give editors an accessible name and description, and tell keyboard users how to leave an editor where Tab indents.
order: 9
tags: [ "features", "accessibility" ]
keywords: [ "ariaLabel", "ariaDescribedBy", "tabFocusHint", "aria-label", "aria-describedby", "keyboard" ]
---

# Accessibility

The editor's content is the element screen readers focus. All three components take these inputs:

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `ariaLabel` | `string` | none | Accessible name of the content (`aria-label`). |
| `ariaDescribedBy` | `string` | none | Ids of describing elements (`aria-describedby`), before the Tab hint's id. |
| `tabFocusHint` | `boolean \| string` | `true` | While `indentWithTab` is on, a visually hidden hint linked by `aria-describedby`. A string replaces the text, `false` removes it. |

Form state is reflected too: `invalid` and `required` set `aria-invalid` and `aria-required`.

```html
<label id="query-label">SQL query</label>
<p id="query-help">Press Ctrl+Enter to run the query.</p>
<ngx-code-editor
  ariaLabel="SQL query"
  ariaDescribedBy="query-help"
  indentWithTab
  [(value)]="query" />
```

## Leaving an editor where Tab indents

With `indentWithTab`, Tab inserts indentation instead of moving focus. Keyboard users leave the editor with Escape,
then Tab. The default hint says so: "Press Escape, then Tab, to move focus out of the editor."

Localize it for every editor with the provider option, or per editor with the input:

```typescript
provideCodeEditor({ tabFocusHint: 'Pulse Escape y luego Tab para salir del editor.' });
```

```html
<ngx-code-editor indentWithTab [tabFocusHint]="false" />
```
