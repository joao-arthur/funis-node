# isValid

```ts
function isValid(num: number | undefined | null): boolean;
```

Returns false for *null*, *undefined* and *NaN*. Returns true otherwise.

## Example

```ts
numbers.isValid(null) // => false
numbers.isValid(undefined) // => false
numbers.isValid(NaN) // => false

numbers.isValid(0) // => true
numbers.isValid(1) // => true
numbers.isValid(Infinity) // => true
```
