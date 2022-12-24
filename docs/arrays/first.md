# first

```ts
function first<T>(arr: readonly T[]): T | undefined;
```

Returns the first item of the array. If the array is empty, returns *undefined*.

## Example

```ts
arrays.first([]) // => undefined
arrays.first([4, 5, 6]) // => 4
```
