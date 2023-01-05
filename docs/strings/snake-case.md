# snakeCase

```ts
function snakeCase(str: string): string
```

Transforms a sequence of words into snake case.

## Example

```ts
strings.snakeCase('hey') // => 'hey'
strings.snakeCase('j S o N') // => 'j_s_o_n'
strings.snakeCase('j_S_o_N') // => 'j_s_o_n'
strings.snakeCase('j-S-o-N') // => 'j_s_o_n'
```
