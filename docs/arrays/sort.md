# sort

```ts
function sort<T>(
    arr: readonly T[],
    compareFn?: (a: T, b: T) => number
): readonly T[]
```

Wrapper of the sort function. Returns a new sorted array without mutating the original one.

## Example

```ts
const original = [9, 1, true, 'olá mundo'];
arrays.sort(original) // => [1, 9, 'olá mundo', true]
original // => [9, 1, true, 'olá mundo']
```

```ts
arrays.sort([5,4,3], (a, b) => a - b) // => [3, 4, 5]
```
