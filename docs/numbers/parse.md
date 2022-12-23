# parse

```ts
type parseOptions = {
    readonly prefix: string;
} | {
    readonly suffix: string;
} | {
    readonly prefix: string;
    readonly suffix: string;
};

function parse(num: string, options: parseOptions): number | undefined;
```
