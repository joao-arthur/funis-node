# fromObject

```ts
function fromObject<T>(obj: plainObject<T>): Map<string | number, T>
```

Returns a Map instance with the same key-value pairs of the passed object.

## Example

```ts
maps.fromObject({}) // => Map { }
```

```ts
maps.fromObject({
    Paul: 'Bass',
    John: 'Guitar',
    George: 'Guitar',
    Ringo: 'Drums',
}) /* => Map {
    Paul -> 'Bass',
    John -> 'Guitar',
    George -> 'Guitar',
    Ringo -> 'Drums',
} */
```
