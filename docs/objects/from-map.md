# fromMap

```ts
function fromMap<T>(obj: plainObject<T>): Map<string | number, T>;
```

Returns a new object with the same key-value pairs of the passed Map instance.

## Example

```ts
objects.fromMap(new Map([])) // => { }
```

```ts
objects.fromMap(
    new Map([
        ['Paul', 'Bass'],
        ['John', 'Guitar'],
        ['George', 'Guitar'],
        ['Ringo', 'Drums'],
    ])
) /* => {
    Paul: 'Bass',
    John: 'Guitar',
    George: 'Guitar',
    Ringo: 'Drums',
}*/
```
