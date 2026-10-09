// biome-ignore-all lint/suspicious/noExplicitAny: Prism is a global script without typings

/**
 * Prism language extension for TypeScript
 * https://prismjs.com/extending.html
 */

declare let Prism: any;

Prism.languages.typescript = Prism.languages.extend('typescript', {
  'class-name': [
    // Keep existing TypeScript class-name patterns
    Prism.languages.typescript['class-name'],

    // Type annotations: foo: Bar, constructor(private foo: Foo)
    {
      pattern: /(:)\s*([A-Z][a-zA-Z0-9_]*(?:\[\])?)/,
      lookbehind: true,
      alias: 'type-annotation'
    },

    // Generic types: Array<string>, Promise<User>
    {
      pattern: /([A-Z][a-zA-Z0-9_]*)\s*(<[^>]*>)/,
      inside: {
        'generic': {
          pattern: /<[^>]*>/,
          inside: Prism.languages.typescript
        }
      }
    },

    // Interface/class implementations: implements Bar, Baz
    {
      pattern: /(implements\s+)([A-Z][a-zA-Z0-9_]*(?:\s*,\s*[A-Z][a-zA-Z0-9_]*)*)/,
      lookbehind: true,
      inside: {
        'interface-name': /[A-Z][a-zA-Z0-9_]*/,
        'punctuation': /,/
      }
    },

    // Class extensions: extends BaseClass
    {
      pattern: /(extends\s+)([A-Z][a-zA-Z0-9_]*)/,
      lookbehind: true
    },

    // new Constructor calls
    {
      pattern: /(new\s+)([A-Z][a-zA-Z0-9_]*)/,
      lookbehind: true
    },

    // Static method calls: MyClass.method()
    {
      pattern: /\b([A-Z][a-zA-Z0-9_]*)(\s*\.)/,
      lookbehind: false,
      inside: {
        'class-reference': /[A-Z][a-zA-Z0-9_]*/,
        'punctuation': /\./
      }
    }
  ],

  'function': [
    // Keep existing function patterns
    Prism.languages.typescript.function,

    // Arrow functions with type annotations
    {
      pattern: /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*[=:]\s*\([^)]*\)\s*=>/,
      inside: {
        'function-name': /^[a-zA-Z_$][a-zA-Z0-9_$]*/,
        'punctuation': /[=:()]/,
        'operator': /=>/
      }
    },

    // Method definitions
    {
      pattern: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*[:{]/,
      inside: {
        'method-name': /^[a-zA-Z_$][a-zA-Z0-9_$]*/,
        'punctuation': /[(){}:]/
      }
    }
  ],

  'keyword': [
    // Keep existing keywords
    ...Prism.languages.typescript.keyword,

    // TypeScript-specific keywords
    /\b(?:abstract|as|asserts|constructor|declare|enum|implements|interface|is|keyof|namespace|never|readonly|type|typeof|unknown)\b/,

    // Access modifiers
    /\b(?:private|protected|public|static|readonly)\b/
  ],

  'decorator': {
    pattern: /@[a-zA-Z_$][a-zA-Z0-9_$]*(?:\.[a-zA-Z_$][a-zA-Z0-9_$]*)*/,
    alias: 'symbol'
  },

  'type-assertion': {
    pattern: /<[^>]+>/,
    inside: Prism.languages.typescript
  },

  'import': [
    // Keep existing import patterns
    Prism.languages.typescript.import,

    // Named imports with better highlighting
    {
      pattern: /(import\s*{)\s*([^}]+)/,
      lookbehind: true,
      inside: {
        'import-name': /[a-zA-Z_$][a-zA-Z0-9_$]*/,
        'punctuation': /[,\s]/,
        'keyword': /\bas\b/
      }
    },

    // Default imports
    {
      pattern: /(import\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)/,
      lookbehind: true,
      alias: 'import-default'
    }
  ],

  'generic': {
    pattern: /<[^<>]*>/,
    inside: Prism.languages.typescript
  },

  'type-parameter': {
    pattern: /\b[A-Z][a-zA-Z0-9_]*(?:\s+extends\s+[^,>=]+)?/,
    inside: {
      'constraint': {
        pattern: /extends\s+.+/,
        inside: Prism.languages.typescript
      }
    }
  }
});

// Alias for .ts files
Prism.languages.ts = Prism.languages.typescript;