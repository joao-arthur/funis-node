# mapKeys

```ts
function mapKeys<K, V>(
    map: Map<K, V>,
    cb: (key: K) => K
): Map<K, V>
```

Map the _Map instance_ keys into a new _Map instance_.

## Example

```ts
maps.mapKeys(
    new Map([
        ['a', 1],
        ['b', 'two'],
        ['c', true],
        [4, 'nada'],
    ]),
    key => `v2_${key}_test`,
) /* => Map {
    v2_a_test -> 1,
    v2_b_test -> 'two',
    v2_c_test -> true,
    v2_4_test -> 'nada',
} */
```
