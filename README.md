# jsFns

A optionated type-safe library for the functions the standand js lacks.

## The problem

When dealing with numbers and arrays, for example, there is a set of simple operations that are common place in **almost every** JS application.

- There is two alternatives in these cases
    - reimplement such operations in every application, which breaks **DRY**
    - use a library such as [lodash](https://www.npmjs.com/package/lodash), [underscore](https://www.npmjs.com/package/underscore), [ramda](https://www.npmjs.com/package/ramda), which are high quality ones, but provide **much more** than just simple operations.

## The solution

_jsFns_ provides a set of modularized basic operations that are common in a wide range of applications. It is a helper for `modern day js` and not a `polyfill library`.

## What it brings

    - Modularized functions
    - Fully in TypeScript
    - Similar functions between different modules have the same nomenclature
    - No side effects (only exception are promises, but these are highlighted)
    - Minimal validation for passed values

## License

[MIT](LICENSE)
