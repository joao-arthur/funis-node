# last

```ts
type returnType<K, V> = {
    readonly key: K;
    readonly value: V;
};

function last<K, V>(map: Map<K, V>): returnType<K, V> | undefined;
```

Returns the last entry of the map.

## Example

```ts
maps.last(new Map()) // => undefined
maps.last(new Map([
    [1, { name: 'Paul McCartney' }],
    [2, { name: 'John Lennon' }],
])) // => [2, { name: 'John Lennon' }]
```
