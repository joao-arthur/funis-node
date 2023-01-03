# mapEntries

```ts
function mapEntries<T>(
    obj: plainObject<T>,
    cb: (entry: [string | number, T]) => [string | number, T]
): plainObject<T>;
```

Map the _Map instance_ entries into a new _Map instance_.

## Example

```ts
maps.mapEntries(
    new Map([
        ['a', 1],
        ['b', 'two'],
        ['c', true],
        [4, 'nada'],
    ]),
    ([key, value]) => [`key_${key}`, `value_${value}`],
) /* => Map {
    key_a -> 'value_1',
    key_b -> 'value_two',
    key_c -> 'value_true',
    key_4 -> 'value_nada',
} */
```
