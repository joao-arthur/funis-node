# last

```ts
function last<T>(arr: readonly T[]): T | undefined
```

Returns the last item of the array. If the array is empty, returns *undefined*.

## Example

```ts
arrays.last([]) // => undefined
```

```ts
arrays.last([4, 5, 6]) // => 6
```
