# entries

```ts
function entries<K, V>(
    map: Map<K, V>
): readonly (readonly [K, V])[]
```

Returns the entries of the Map instance.

## Example

```ts
maps.entries(new Map()) // => []
```

```ts
maps.entries(
    new Map([
        [1, { name: 'Paul McCartney' }],
        [2, { name: 'George Harrison' }],
    ])
) /* => [
    [1, { name: 'Paul McCartney' }],
    [2, { name: 'George Harrison' }],
] */
```
