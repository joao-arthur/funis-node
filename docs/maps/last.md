# last

```ts
function last<K, V>(map: Map<K, V>): readonly [K, V] | undefined
```

Returns the last entry of the map.

## Example

```ts
maps.last(new Map()) // => undefined
```

```ts
maps.last(
    new Map([
        [1, { name: 'Paul McCartney' }],
        [2, { name: 'John Lennon' }],
    ])
) // => [2, { name: 'John Lennon' }]
```
