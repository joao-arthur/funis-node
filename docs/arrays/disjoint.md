# disjoint

```ts
function disjoint<T>(
    arrs: readonly (readonly T[])[]
): readonly T[]
```

Returns an array with the items that appear in only one array.

## Example

```ts
arrays.disjoint([[1, 2, 3], [1, 2, 3]]) // => []
```

```ts
arrays.disjoint([[1]]) // => [1]
arrays.disjoint([[false, true], []]) // => [false, true]
arrays.disjoint([[4, 5, 6], [5, 6, 7]]) // => [4, 7]
arrays.disjoint([
    ['George', 'Paul', 'John', 'Ringo', 'George'],
    ['Ringo'],
    ['John'],
]) // => ['George', 'Paul']
```
