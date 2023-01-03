# mapValues

```ts
function mapValues<T>(
    obj: plainObject<T>,
    cb: (value: T) => T
): plainObject<T>;
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
