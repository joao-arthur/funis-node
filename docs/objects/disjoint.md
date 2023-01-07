# disjoint

```ts
function disjoint(
    objs: readonly plainObject[]
): plainObject
```

Returns an object with the entries which the key appears in only one of them.

## Example

```ts
objects.disjoint([
    { name: 'Steve Harris', country: 'UK' },
    { name: 'Megadeth', foundation: 1983 },
]) // => { country: 'UK', foundation: 1983 }
```
