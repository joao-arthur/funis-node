# sort

```ts
function sort<T>(arr: readonly T[]): readonly T[];
```

Returns a new array with the items sorted.

## Example

```ts
const original = [9, 1, true, 'olá mundo'];
arrays.sort(original) // => [1, 9, 'olá mundo', true]
original // => [9, 1, true, 'olá mundo']
```
