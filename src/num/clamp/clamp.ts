import { std } from "../../std/mod.js";

type clampOptions = {
    readonly min: number;
} | {
    readonly max: number;
} | {
    readonly min: number;
    readonly max: number;
};

/**
 * # clamp
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
 * num.clamp(77, { min: 99 }) // 99
 * num.clamp(10, { min: 8 }) // 10
 * ```
 *
 * ```ts
 * num.clamp(-10, { max: 5 }) // -10
 * num.clamp(846, { max: -1 }) // -1
 * ```
 *
 * ```ts
 * num.clamp(10, { min: 8, max: 12 }) // 10
 * num.clamp(10, { min: 0, max: 9 }) // 9
 * ```
 */
export function clamp(num: number, options: clampOptions): number {
    return std.pipe(
        (current: number) => "min" in options ? Math.max(current, options.min) : current,
        (current: number) => "max" in options ? Math.min(current, options.max) : current,
    )(num);
}
