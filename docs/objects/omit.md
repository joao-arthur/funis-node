# omit

```ts
function omit<T>(
    obj: plainObject<T>,
    keys: readonly string[],
): plainObject<T>
```

Creates a new object without the passed keys.

## Example

```ts
omit(
    { animal: 'dog', species: 'Canis lupus', age: 5 },
    ['animal'],
) // => { species: 'Canis lupus', age: 5 }
```
