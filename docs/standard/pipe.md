# pipe

```ts
...
```

Returns a function that apply the result of each function to the next one in the order they are defined.

::: info
Typescript does not infer the type of the first function argument when you call the function.

To ensure type-safety, you have to explicit type the first function.
:::

## Example

```ts
pipe(
    (value: number) => value * 2, // => 20
    value => value - 5, // => 15
    value => value / 3, // => 5
    value => `${value} is the result` // => '5 is the result'
)(10) // => '5 is the result'
```
