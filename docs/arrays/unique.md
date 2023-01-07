# unique

```ts
function unique<T>(arr: readonly T[]): readonly T[]
```

Returns an array with the unique values.

## Example

```ts
arrays.unique([1, 1, 'john', 'john']) // => [1, 'john']
arrays.unique([42]) // => [42]
```
