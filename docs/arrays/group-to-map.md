# groupToMap

```ts
function groupToMap<K, V>(
    arr: readonly V[],
    cb: (item: V) => K
): Map<K, readonly V[]>
```

Group the items by the returned value of the callback. Then return the groups in an Map instance.

## Example

```ts
arrays.groupToMap(
    [
        { type: 'grass', name: 'bulbasaur' },
        { type: 'fire', name: 'charmander' },
        { type: 'water', name: 'squirtle' },
        { type: 'bug', name: 'caterpie' },
        { type: 'water', name: 'psyduck' },
    ],
    item => item.type,
) /* => Map {
    grass -> [{ type: 'grass', name: 'bulbasaur' }],
    fire -> [{ type: 'fire', name: 'charmander' }],
    water -> [
        { type: 'water', name: 'squirtle' },
        { type: 'water', name: 'psyduck' },
    ],
    bug -> [{ type: 'bug', name: 'caterpie' }],
} */
```
