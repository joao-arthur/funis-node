import { pipe } from '../../standard/pipe/pipe.js';

type clampOptions = {
    readonly min: number;
} | {
    readonly max: number;
} | {
    readonly min: number;
    readonly max: number;
}

export function clamp(num: number, options: clampOptions): number {
    return pipe(
        (current: number) => 'min' in options
            ? Math.max(current, options.min)
            : current,
        (current: number) => 'max' in options
            ? Math.min(current, options.max)
            : current,
    )(num);
}
