# camelCase

```ts
function camelCase(str: string): string
```

Transforms a sequence of words into camel case.

## Example

```ts
strings.camelCase('hey') // => 'hey'
strings.camelCase('j S o N') // => 'jSON'
strings.camelCase('j_S_o_N') // => 'jSON'
strings.camelCase('j-S-o-N') // => 'jSON'
```
