# first

```ts
function first<T>(
    promises: readonly Promise<T>[]
): Promise<T>
```

Returns the first promise to resolve/reject.

::: warning
This function sets a *then* and *catch* callback for every passed promise.

This way, the only promise you can *then* or *catch* is the one returned by this function.
:::

## Example

```ts
await promises.first([
    promises.resolveTimeout('Socrates', 50),
    promises.resolveTimeout('Plato', 100),
    promises.rejectTimeout('Aristotle', 200),
]) // => 'Socrates'
```
