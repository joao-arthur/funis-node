# resolveTimeout

```ts
function resolveTimeout<T>(
    valueToResolve: T,
    timeout: number
): Promise<T>
```

Returns a promise that resolves after the timeout.

## Example

```ts
await promises.resolveTimeout(
    'Hello, promise!',
    500
) // => 'Hello, promise!'
```
