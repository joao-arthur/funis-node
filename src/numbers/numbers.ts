import { clamp } from './clamp/clamp.js';
import { isValid } from './isValid/isValid.js';
import { parsePrefixed } from './parsePrefixed/parsePrefixed.js';
import { parseSuffixed } from './parseSuffixed/parseSuffixed.js';
import { range } from './range/range.js';

export const numbers = {
    clamp,
    isValid,
    parsePrefixed,
    parseSuffixed,
    range,
} as const;
