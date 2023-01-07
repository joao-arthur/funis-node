# random

```ts
random<T>(arr: readonly T[]): T | undefined
```

Returns a random character of the array.

## Example

```ts
arrays.random([]) // => undefined
```

```ts
arrays.random([true]) // => [true]
arrays.random(false, 0, 'n') // => false | 0 | 'n'
```
