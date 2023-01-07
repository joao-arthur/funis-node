# mapEntries

```ts
function mapEntries<T>(
    obj: plainObject<T>,
    cb: (
        entry: readonly [string | number, T]
    ) => readonly [string | number, T],
): plainObject<T>
```

Map the object entries into an object.

## Example

```ts
objects.mapEntries(
    {
        a: 1,
        b: 'two',
        c: true,
        4: 'nada',
    },
    ([key, value]) => [`key_${key}`, `value_${value}`],
) /* => {
    key_a: 'value_1',
    key_b: 'value_two',
    key_c: 'value_true',
    key_4: 'value_nada',
} */
```
