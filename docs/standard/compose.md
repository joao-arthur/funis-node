# compose

```ts
...
```

Returns a function that apply the result of each function to the next one in the opposite order they are defined.

::: info
Typescript does not infer the type of the last function argument when you call the function.

To ensure type-safety, you have to explicit type the first function.
:::

## Example

```ts
compose(
    value => `${value} is the result` // => '5 is the result'
    value => value / 3, // => 5
    value => value - 5, // => 15
    (value: number) => value * 2, // => 20
)(10) // => '5 is the result'
```
