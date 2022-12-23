# groupToEntries

```ts
function groupToEntries<K, V>(
    arr: readonly V[],
    cb: (item: V) => K
): readonly (readonly [K, readonly V[]])[];
```
