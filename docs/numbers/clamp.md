# clamp

```ts
type clampOptions = {
    readonly min: number;
} | {
    readonly max: number;
} | {
    readonly min: number;
    readonly max: number;
}

function clamp(num: number, options: clampOptions): number
```

If min is passed and the number is smaller than min, returns min.

If max is passed and the number is bigger than max, returns max.

Returns the passed value otherwise.
    
## Example

```ts
numbers.clamp(77, { min: 99 }) // => 99
numbers.clamp(10, { min: 8 }) // => 10
```

```ts
numbers.clamp(-10, { max: 5 }) // => -10
numbers.clamp(846, { max: -1 }) // => -1
```

```ts
numbers.clamp(10, { min: 8, max: 12 }) // => 10
numbers.clamp(10, { min: 0, max: 9 }) // => 9
```
