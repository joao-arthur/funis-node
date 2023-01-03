# debounce

```ts
function debounce(
    cb: () => void,
    timeout: number
): () => void
```

Returns a function that executes the callback after the timeout.

Whenever the returned function is called during the timeout period, the timeout resets.

## Example

```ts
const strArr: string[] = [];
const returnedFn = debounce(() => strArr.push('Salvator mundi'), 1);
returnedFn();
// after 5 ms
returnedFn();
// after 5 ms
strArr // => ['Salvator mundi', 'Salvator mundi']
```

```ts
const strArr: string[] = [];
const returnedFn = debounce(() => strArr.push('Salvator mundi'), 30);
returnedFn();
// after 10 ms
returnedFn();
// after 10 ms
returnedFn();
// after 10 ms
returnedFn();
// after 10 ms
strArr // => []
```
