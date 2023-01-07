# mapKeys

```ts
function mapKeys<T>(
    obj: plainObject<T>,
    cb: (key: string | number) => string | number
): plainObject<T>
```

Map the object keys into an object.

## Example

```ts
objects.mapKeys(
    {
        a: 1,
        b: 'two',
        c: true,
        4: 'nada',
    },
    key => `v2_${key}_test`,
) /* => {
    v2_a_test: 1,
    v2_b_test: 'two',
    v2_c_test: true,
    v2_4_test: 'nada',
} */
```
