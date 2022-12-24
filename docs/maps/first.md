# first

```ts
type returnType<K, V> = {
    readonly key: K;
    readonly value: V;
};

function first<K, V>(map: Map<K, V>): returnType<K, V> | undefined;
```

Returns the first entry of the map.

## Example

```ts
maps.first(new Map()) // => undefined
maps.first(new Map([
    [1, { name: 'Paul McCartney' }],
    [2, { name: 'John Lennon' }],
])) // => [1, { name: 'Paul McCartney' }]
```
