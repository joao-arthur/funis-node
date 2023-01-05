# rejectTimeout

```ts
function rejectTimeout<T>(
    valueToReject: T,
    timeout: number
): Promise<T>
```

Returns a promise that rejects after the timeout.

## Example

```ts
try {
    await promises.resolveTimeout(
        'Hello, promise!',
        500
    );
} catch (e) {
    e // => // => 'Hello, promise!' 
}
```
