# intersect

```ts
function intersect(
    objs: readonly plainObject[]
): plainObject
```

## Example

```ts
objects.intersect([
    { name: 'Cliff Burton', band: 'Metallica', country: 'US' },
    { name: 'James Hetfield', band: 'Metallica', country: 'US' },
    { name: 'Kirk Hammett', band: 'Metallica', country: 'US' },
]) // => { band: 'Metallica', country: 'US' }
```
