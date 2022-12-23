# clamp

```ts
type clampOptions = {
    readonly min: number;
} | {
    readonly max: number;
} | {
    readonly min: number;
    readonly max: number;
};

function clamp(num: number, options: clampOptions): number;
```
