# mapValues

```ts
function mapValues<T>(
    obj: plainObject<T>,
    cb: (value: T) => T
): plainObject<T>
```

Map the object values into an object.

## Example

```ts
objects.mapValues(
    {
        a: 1,
        b: 'two',
        c: true,
        4: 'nada',
    },
    value => value === true,
) /* => {
    a: false,
    b: false,
    c: true,
    4: false,
} */
```
