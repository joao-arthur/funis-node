import { clamp } from './clamp';
import { isValid } from './isValid';
import { range } from './range';
import { parsePrefixed } from './parsePrefixed';
import { parseSuffixed } from './parseSuffixed';

export const numbers = {
    clamp,
    isValid,
    range,
    parsePrefixed,
    parseSuffixed,
} as const;
