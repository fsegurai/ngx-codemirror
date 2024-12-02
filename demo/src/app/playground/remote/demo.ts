export const playgroundDemo = `## Images Section

![Custom background](https://pub-5319465d44da4d52805a6be35612d5b4.r2.dev/assets/large/background/custom-bg-01.jpg)

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://pub-5319465d44da4d52805a6be35612d5b4.r2.dev/assets/large/background/custom-bg-01.jpg  "Test Inline Reference"

## Horizontal Rule Section

---

***

## Advertisement

__Advertisement :smile:

## Emphasis Section

**This is bold text**

*This is italic text*

~~Strikethrough~~

## Headings Section

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules

---

***

***

## Emphasis Section

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes Section

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Unordered Lists Section

- Create a list by starting a line with \`+\`, \`-\`, or \`*\`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!
- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly i18n with plurals support and easy syntax.

 ## Ordered Lists Section

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

<!-- -->

1. You can use sequential numbers...

<!-- -->

1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo

<!-- -->

1. bar

## Task Lists Section

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

## Code Section

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample
text
here
...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables Section

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links Section

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

[smart](https://google.com)

[Internal reference - Code Section](/routerLink:playground#code-section)

## Plugins Section

For more details regarding **Marked** extension, visit the [official documentation](https://marked.js.org/using_advanced#extensions)

### [Emojis](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19<sup>th</sup>
- H<sub>2</sub>O

### [\`<ins>\`](https://github.com/markdown-it/markdown-it-ins)

<ins>Inserted Text</ins>

### [\`<mark>\`](https://github.com/markdown-it/markdown-it-mark)

<p align="center">
  <mark>Marked Text</mark>
</p>

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is <abbr title="Title test">HTML</abbr> abbreviation example.

It converts <abbr>HTML</abbr>, but keep intact partial entries like "xxxHTMLyyy" and so on.

[HTML]: Hyper Text Markup Language

### [Math](katex.com)

<p align="center">
  $\\sqrt{3x-1}+(1+x)^2$
</p>

$f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi$

### [Mermaid](https://mermaid.js.org/intro/getting-started.html)

\`\`\`mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
\`\`\`

\`\`\`mermaid
sequenceDiagram
  Alice->>John: Hello John, how are you?
  John-->>Alice: Great!
\`\`\`

`;
