import { clamp } from './clamp/clamp.js';
import { isValid } from './isValid/isValid.js';
import { range } from './range/range.js';
import { parsePrefixed } from './parsePrefixed/parsePrefixed.js';
import { parseSuffixed } from './parseSuffixed/parseSuffixed.js';

export const numbers = {
    clamp,
    isValid,
    range,
    parsePrefixed,
    parseSuffixed,
} as const;
