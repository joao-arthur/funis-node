# isValid

```ts
function isValid(str: string | undefined | null): boolean
```

Returns false for *undefined* and *null*. Returns true otherwise.

## Example

```ts
strings.isValid(undefined) // => false
strings.isValid(null) // => false
```

```ts
strings.isValid('') // => true
strings.isValid(' ') // => true
strings.isValid('Lorem ipsum') // => true
```
