# compose

```ts
function compose<T1, T2>(
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T2;

function compose<T1, T2, T3>(
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T3;

...
```

Returns a function that apply the result of each function to the next one in the opposite order they are defined.

::: info
Typescript does not infer the type of the function arguments as you would expect.

You have to explicit type all but the first function argument 😰.
:::

## Example

```ts
compose(
    value => `${value} is the result` // => '5 is the result'
    (value: number) => value / 3, // => 5
    (value: number) => value - 5, // => 15
    (value: number) => value * 2, // => 20
)(10) // => '5 is the result'
```
