import { clamp } from './clamp';
import { isValid } from './isValid';
import { range } from './range';

export const numberFns = {
    clamp,
    isValid,
    range,
} as const;
