import { clamp } from './clamp';
import { isNumberValid } from './isNumberValid';
import { range } from './range';

export const numberFns = {
    clamp,
    isNumberValid,
    range,
} as const;
