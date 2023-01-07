# intersect

```ts
function intersect(
    objs: readonly plainObject[]
): plainObject
```

Returns an object with the entries that appear in all of them.

## Example

```ts
objects.intersect([
    { name: 'Cliff Burton', band: 'Metallica', country: 'US' },
    { name: 'James Hetfield', band: 'Metallica', country: 'US' },
    { name: 'Kirk Hammett', band: 'Metallica', country: 'US' },
]) // => { band: 'Metallica', country: 'US' }
```
