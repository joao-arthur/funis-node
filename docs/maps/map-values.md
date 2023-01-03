# mapValues

```ts
function mapValues<K, V>(
    map: Map<K, V>,
    cb: (value: V) => V
): Map<K, V>
```

Map the _Map instance_ values into a new _Map instance_.

## Example

```ts
maps.mapValues(
    new Map([
        ['a', 1],
        ['b', 'two'],
        ['c', true],
        [4, 'nada'],
    ]),
    value => value === true,
) /* => Map {
    a -> false,
    b -> false,
    c -> true,
    4 -> false,
} */
```
