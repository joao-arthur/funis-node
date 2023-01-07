# pick

```ts
function pick<T>(
    obj: plainObject<T>,
    keys: readonly string[],
): plainObject<T>
```

Creates a new object with only the passed keys.

## Example

```ts   
pick(
    { animal: 'dog', species: 'Canis lupus', age: 5 },
    [],
) // => { }
```

```ts   
pick(
    { animal: 'dog', species: 'Canis lupus', age: 5 },
    ['animal'],
) // => { animal: 'dog' }
```
