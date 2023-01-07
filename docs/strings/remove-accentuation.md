# removeAccentuation

```ts
function removeAccentuation(str: string): string
```

Remove accentuated characters.

## Example

```ts
strings.removeAccentuation('loção') // => loo
strings.removeAccentuation('fianceé') // => fiance
strings.removeAccentuation('Äpfel') // => pfel
strings.removeAccentuation('këndon') // => kndon
strings.removeAccentuation('pálmafák') // => plmafk
```
