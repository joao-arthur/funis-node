# groupToArray

```ts
function groupToArray<K, V>(
    arr: readonly V[],
    cb: (item: V) => K
): readonly (readonly V[])[];
```
