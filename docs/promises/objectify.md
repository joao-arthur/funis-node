# objectify

```ts
type returnType<V, E> = {
    readonly value: V | undefined;
    readonly error: E | undefined;
    readonly type: 'resolved' | 'rejected';
}

function objectify<V, E>(
    promise: Promise<V>,
): Promise<returnType<V, E>>
```

Returns an object with value and error entries corrensponding to resolved or rejected value of the promise.

## Example

```ts
await objectify(
    Promise.resolve(undefined)
) // => { value: undefined, error: undefined, type: 'resolved' }
await objectify(
    Promise.resolve('Symbolic acts')
) // => { value: 'Symbolic acts', error: undefined, type: 'resolved' }
```

```ts
await objectify(
    Promise.reject(undefined)
) // => { value: undefined, error: undefined, type: 'rejected' }
await objectify(
    Promise.reject('So vivid')
) // => { value: undefined, error: 'So vivid', type: 'rejected' }
```
