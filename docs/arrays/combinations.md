# combinations

```ts
function combinations<T>(
    arr: readonly T[],
): readonly (readonly [T, T])[]
```

Returns an array with the non-repeating combination of the items.

## Example

```ts
arrays.combinations([]) // => []
arrays.combinations([10]) // => []
```

```ts
arrays.combinations([10, 20, 30, 40, 50]) /* => [
    [10, 20],
    [10, 30],
    [10, 40],
    [10, 50],
    [20, 30],
    [20, 40],
    [20, 50],
    [30, 40],
    [30, 50],
    [40, 50],
] */
```