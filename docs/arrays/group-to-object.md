# groupToObject

```ts
function groupToObject<K, V>(
    arr: readonly V[],
    cb: (item: V) => K
): plainObject<V>
```

Group the items by the returned value of the callback. Then return the groups in an plain object.

## Example

```ts
arrays.groupToObject(
    [
        { type: 'grass', name: 'bulbasaur' },
        { type: 'fire', name: 'charmander' },
        { type: 'water', name: 'squirtle' },
        { type: 'bug', name: 'caterpie' },
        { type: 'water', name: 'psyduck' },
    ],
    item => item.type,
) /* => {
    grass: [{ type: 'grass', name: 'bulbasaur' }],
    fire: [{ type: 'fire', name: 'charmander' }],
    water: [
        { type: 'water', name: 'squirtle' },
        { type: 'water', name: 'psyduck' },
    ],
    bug: [{ type: 'bug', name: 'caterpie' }],
} */
```
