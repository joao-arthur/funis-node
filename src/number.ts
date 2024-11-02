import { pipe } from "./standard.js";

/**
 * # numIsValid
 *
 * Returns false for _undefined_, _null_ and _NaN_. Returns true otherwise.
 *
 * ## Example
 *
 * ```ts
 * numIsValid(undefined) // false
 * numIsValid(null) // false
 * numIsValid(NaN) // false
 * ```
 *
 * ```ts
 * numIsValid(0) // true
 * numIsValid(1) // true
 * numIsValid(Infinity) // true
 * ```
 */
export function numIsValid(num: number | undefined | null): boolean {
    if (typeof num !== "number") {
        return false;
    }
    if (num === 0) {
        return true;
    }
    return !!num;
}

/**
 * # numCompAsc
 *
 * Compare the numbers in ascending order.
 *
 * ## Example
 *
 * ```ts
 * [1, 9, 2, 8, 3, 7, 4].sort(numCompAsc) // [1, 2, 3, 4, 7, 8, 9]
 * ```
 */
export function numCompAsc(a: number, b: number): number {
    return a > b ? 1 : -1;
}

/**
 * # numCompDesc
 *
 * Compare the numbers in descending order.
 *
 * ## Example
 *
 * ```ts
 * [1, 9, 2, 8, 3, 7, 4].sort(numCompDesc) // [1, 2, 3, 4, 7, 8, 9]
 * ```
 */
export function numCompDesc(a: number, b: number): number {
    return a > b ? -1 : 1;
}

type ClampOptions = {
    readonly min: number;
} | {
    readonly max: number;
} | {
    readonly min: number;
    readonly max: number;
};

/**
 * # numClamp
 *
 * If min is passed and the number is smaller than min, returns min.
 *
 * If max is passed and the number is bigger than max, returns max.
 *
 * Returns the passed value otherwise.
 *
 * ## Example
 *
 * ```ts
 * numClamp(77, { min: 99 }) // 99
 * numClamp(10, { min: 8 }) // 10
 * ```
 *
 * ```ts
 * numClamp(-10, { max: 5 }) // -10
 * numClamp(846, { max: -1 }) // -1
 * ```
 *
 * ```ts
 * numClamp(10, { min: 8, max: 12 }) // 10
 * numClamp(10, { min: 0, max: 9 }) // 9
 * ```
 */
export function numClamp(num: number, options: ClampOptions): number {
    return pipe(
        () => num,
        (current: number) => "min" in options ? Math.max(current, options.min) : current,
        (current: number) => "max" in options ? Math.min(current, options.max) : current,
    )(undefined);
}

/**
 * # numNormalizeZero
 *
 * If the passed value is -0, returns 0. Returns the passed value otherwise.
 *
 * ## Example
 *
 * ```ts
 * numNormalizeZero(-0) // 0
 * numNormalizeZero(0) // 0
 * ```
 */
export function numNormalizeZero(num: number): number {
    return Object.is(num, -0) ? 0 : num;
}

type ParseOptions = {
    readonly prefix: string;
} | {
    readonly suffix: string;
} | {
    readonly prefix: string;
    readonly suffix: string;
};

/**
 * # numParse
 *
 * Try to parse a number by the given prefix and suffix. If the prefix or suffix doesn"t match the passed value, returns _undefined_.
 *
 * ## Example
 *
 * ```ts
 * numParse(
 *     "I see penguins",
 *     { prefix: "I see ", suffix: "penguins" }
 * ) // undefined
 * numParse("US$4", { prefix: "R$" }) // undefined
 * numParse("4px", { suffix: "rem" }) // undefined
 * ```
 *
 * ```ts
 * numParse("$100.00", { prefix: "$" }) // 100.00
 * numParse(
 *     "width: 100px",
 *     { prefix: "width: ", suffix: "px" }
 * ) // 100
 * ```
 */
export function numParse(num: string, options: ParseOptions): number | undefined {
    if ("prefix" in options && num.indexOf(options.prefix) === -1) {
        return undefined;
    }
    if ("suffix" in options && num.indexOf(options.suffix) === -1) {
        return undefined;
    }
    const startIndex = "prefix" in options
        ? num.indexOf(options.prefix) + options.prefix.length
        : 0;
    const endIndex = "suffix" in options ? num.indexOf(options.suffix) : num.length;
    const slice = num.slice(startIndex, endIndex);
    if (slice === "") {
        return undefined;
    }
    const parsed = Number(slice);
    return !Number.isNaN(parsed) ? parsed : undefined;
}

/**
 * # numRange
 *
 * Returns a range from a number to another, respecting the step between each value.
 *
 * ## Example
 *
 * ```ts
 * numRange(2, -1) // []
 * numRange(-1, 2, -1) // []
 * ```
 *
 * ```ts
 * numRange(-1, 2) // [-1, 0, 1, 2]
 * numRange(4, 5.1) // [4, 5]
 * numRange(2, -1, -1) // [2, 1, 0, -1]
 * numRange(10.2, 9, -0.2) // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
 * ```
 */
export function numRange(from: number, to: number, step = 1): readonly number[] {
    const length = pipe(
        () => numToFixed(to - from, 10),
        (delta) => numToFixed(delta / step, 10),
        (deltaByStep) => Math.floor(deltaByStep) + 1,
        (length) => Math.max(length, 0),
    )(undefined);
    return Array(length)
        .fill(undefined)
        .map((_, i) => i * step + from)
        .map((value) => Number(value.toFixed(10)));
}

/**
 * # numLazyRange
 *
 * Returns an iterable range from a number to another, respecting the step between each value.
 *
 * ## Example
 *
 * ```ts
 * numLazyRange(2, -1) // []
 * numLazyRange(-1, 2, -1) // []
 * ```
 *
 * ```ts
 * numLazyRange(-1, 2) // [-1, 0, 1, 2]
 * numLazyRange(4, 5.1) // [4, 5]
 * numLazyRange(2, -1, -1) // [2, 1, 0, -1]
 * numLazyRange(10.2, 9, -0.2) // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
 * ```
 */
export function numLazyRange(from: number, to: number, step = 1): IterableIterator<number> {
    const length = pipe(
        () => numToFixed(to - from, 10),
        (delta) => numToFixed(delta / step, 10),
        (deltaByStep) => Math.floor(deltaByStep) + 1,
        (length) => Math.max(length, 0),
    )(undefined);
    let i = -1;
    return {
        next(): IteratorResult<number> {
            i++;
            const done = i + 1 > length;
            return {
                done,
                value: done ? undefined! : i * step + from,
            };
        },
        [Symbol.iterator](): IterableIterator<number> {
            return this;
        },
    };
}

/**
 * # numToFixed
 *
 * Wrapper of the toFixed function with a cast to number.
 *
 * ## Example
 *
 * ```ts
 * numToFixed(3, 0) // 3
 * numToFixed(1.1, 1) // 1.1
 * numToFixed(10.10101, 1) // 10.1
 * ```
 */
export function numToFixed(num: number, digits: number): number {
    return Number(num.toFixed(digits));
}

/**
 * # numRandom
 *
 * Returns a random integer number between the range inclusively.
 *
 * ## Example
 *
 * ```ts
 * numRandom(2, -1) // 2 | 1 | 0 | -1
 * numRandom(-1, 2) // -1 | 0 | 1 | 2
 * numRandom(5, 5) // 5
 * ```
 */
export function numRandom(lower: number, upper: number): number {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
