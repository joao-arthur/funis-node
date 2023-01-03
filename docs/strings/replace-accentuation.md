# replaceAccentuation

```ts
function replaceAccentuation(str: string): string
```

Replace accentuated characters by unaccentuated ones.

## Example

```ts
strings.replaceAccentuation('loção') // => locao
strings.replaceAccentuation('fianceé') // => fiancee
strings.replaceAccentuation('Äpfel') // => Apfel
strings.replaceAccentuation('këndon') // => kendon
strings.replaceAccentuation('pálmafák') // => palmafak
```
