# first

```ts
type returnType<K, V> = {
    readonly key: K;
    readonly value: V;
};

function first<K, V>(map: Map<K, V>): returnType<K, V> | undefined;
```
