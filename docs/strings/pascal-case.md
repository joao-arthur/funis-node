# pascalCase

```ts
function pascalCase(str: string): string
```

Transforms a sequence of words into pascal case.

## Example

```ts
strings.pascalCase('hey') // => 'Hey'
strings.pascalCase('j S o N') // => 'JSON'
strings.pascalCase('j_S_o_N') // => 'JSON'
strings.pascalCase('j-S-o-N') // => 'JSON'
```
