# random

```ts
function random(
    lower: number,
    upper: number,
): number
```

Returns a random integer number between the range inclusively.

## Example

```ts
numbers.random(2, -1) // => 2 | 1 | 0 | -1
numbers.random(-1, 2) // => -1 | 0 | 1 | 2
numbers.random(5, 5) // => 5
```
