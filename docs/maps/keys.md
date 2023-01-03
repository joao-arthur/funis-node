# keys

```ts
function keys<K, V>(map: Map<K, V>): readonly K[]
```

Returns the keys of the Map instance entries.

## Example

```ts
maps.keys(new Map()) // => []
```

```ts
maps.keys(
    new Map([
        [1, { name: 'Paul McCartney' }],
        [2, { name: 'George Harrison' }],
    ])
) // => [1, 2]
```
