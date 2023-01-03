import { clamp } from './clamp/clamp.js';
import { parse } from './parse/parse.js';
import { range } from './range/range.js';
import { isValid } from './isValid/isValid.js';

export const numbers = {
    clamp,
    parse,
    range,
    isValid,
} as const;
