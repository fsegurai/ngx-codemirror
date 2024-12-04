<p align="center">
  <img alt="@fsegurai/ngx-codemirror Logo" src="https://raw.githubusercontent.com/fsegurai/ngx-codemirror/main/demo/public/ngx-codemirror.png">
</p>

<p align="center">
  <a href="https://github.com/fsegurai/ngx-codemirror/actions/workflows/release-library.yml">
      <img src="https://github.com/fsegurai/ngx-codemirror/actions/workflows/release-library.yml/badge.svg"
          alt="Build Status">
  </a>
  <a href="https://github.com/fsegurai/ngx-codemirror/releases/latest">
      <img src="https://img.shields.io/github/v/release/fsegurai/ngx-codemirror"
          alt="Latest Release">
  </a>
  <br>
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/fsegurai/ngx-codemirror">
  <img alt="Dependency status for repo" src="https://img.shields.io/librariesio/github/fsegurai/ngx-codemirror">
  <a href="https://opensource.org/licenses/MIT">
    <img alt="GitHub License" src="https://img.shields.io/github/license/fsegurai/ngx-codemirror">
  </a>
  <br>
  <img alt="Stars" src="https://img.shields.io/github/stars/fsegurai/ngx-codemirror?style=square&labelColor=343b41"/> 
  <img alt="Forks" src="https://img.shields.io/github/forks/fsegurai/ngx-codemirror?style=square&labelColor=343b41"/>
  <a href="https://www.npmjs.com/package/@fsegurai/ngx-codemirror">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/@fsegurai/ngx-codemirror">
  </a>
</p>

**This is just a side project to provide additional features that fulfill my needs.**

`@fsegurai/ngx-codemirror` is an [Angular](https://angular.dev/) library that combines...

- [CodeMirror](https://codemirror.net/) to provide a versatile text editor implemented in JavaScript for the browser

### Table of contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Renderer](#renderer)
- [Demo application](#demo-application)
- [AoT compilation](#aot-compilation)
- [Road map](#road-map)
- [Contribution](#contribution)
- [Support Development](#support-development)

## Installation

### @fsegurai/ngx-codemirror

To add `@fsegurai/ngx-codemirror` along with the required codemirror library to your `package.json` use the following commands.

```bash
npm install @fsegurai/ngx-codemirror codemirror@^6.0.1 --save
```

## Demo application

A demo is available @ [https://fsegurai.github.io/ngx-codemirror](https://fsegurai.github.io/ngx-codemirror) and its source code can be found inside the `demo` directory.

    It's important to mention that for this project I'm using:
    Node.js v20.11.1 and Bun v1.1.32 (or later).

The following commands will clone the repository, install npm dependencies and serve the application @ [http://localhost:4200](http://localhost:4200)

> It is advisable to use `bun` as the package manager for managing numerous dependencies, as it is faster than `npm` and generally more reliable.

```bash
git clone https://github.com/fsegurai/ngx-codemirror.git
bun install
bun start
```

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
