# groupToMap

```ts
function groupToMap<K, V>(
    arr: readonly V[],
    cb: (item: V) => K
): Map<K, readonly V[]>;
```
