# values

```ts
function values<K, V>(map: Map<K, V>): readonly V[]
```

Returns the values of the Map instance entries.

## Example

```ts
maps.values(new Map()) // => []
```

```ts
maps.values(
    new Map([
        [1, { name: 'Paul McCartney' }],
        [2, { name: 'George Harrison' }],
    ])
) /* => [
    { name: 'Paul McCartney' },
    { name: 'George Harrison' },
] */
```
