# last

```ts
type returnType<K, V> = {
    readonly key: K;
    readonly value: V;
};

function last<K, V>(map: Map<K, V>): returnType<K, V> | undefined;
```
