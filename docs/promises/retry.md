# retry

```ts
function retry<V, E>(
    cb: () => Promise<V>,
    attempts: number,
): Promise<V | undefined>
```

Tries to resolve the promise for the number of especified attempts.

## Example

```ts
let i = 1;

retry(() => {
    i++;
    if (i === 5)
        return Promise.resolve('Ludwig van Beethoven');
    else
        return Promise.reject('Johann Sebastian Bach');
}, 10) // => 'Ludwig van Beethoven'
```

```ts
try {
    await promises.retry(
        Promise.reject('Donatello'),
        5
    );
} catch (e) {
    e // => // => 'Donatello' 
}
```
