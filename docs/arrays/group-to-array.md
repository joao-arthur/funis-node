# groupToArray

```ts
function groupToArray<K, V>(
    arr: readonly V[],
    cb: (item: V) => K
): readonly (readonly V[])[]
```

Group the items by the returned value of the callback. Then return the groups in an array.

## Example

```ts
arrays.groupToArray(
    [
        { type: 'grass', name: 'bulbasaur' },
        { type: 'fire', name: 'charmander' },
        { type: 'water', name: 'squirtle' },
        { type: 'bug', name: 'caterpie' },
        { type: 'water', name: 'psyduck' },
    ],
    item => item.type,
) /* => [
    [{ type: 'grass', name: 'bulbasaur' }],
    [{ type: 'fire', name: 'charmander' }],
    [
        { type: 'water', name: 'squirtle' },
        { type: 'water', name: 'psyduck' },
    ],
    [{ type: 'bug', name: 'caterpie' }],
] */
```
