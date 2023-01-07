# intersect

```ts
function intersect<T>(
    arrs: readonly (readonly T[])[]
): readonly T[]
```

Returns an array with the items that appear in every array.

## Example

```ts
arrays.intersect([[false, true], []]) // => []
arrays.intersect([[1, 2, 3], [4, 5, 6]]) // => []
```

```ts
arrays.intersect([['']]) // => ['']
arrays.intersect([[4, 5, 6], [5, 6, 7]]) // => [5, 6]
arrays.intersect([
    ['George', 'Paul', 'John', 'Ringo', 'Ringo'],
    ['Ringo'],
    ['Ringo', 'John'],
]) // => ['Ringo']
```
