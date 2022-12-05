import { clamp } from './clamp/clamp.js';
import { isValid } from './isValid/isValid.js';
import { parse } from './parse/parse.js';
import { range } from './range/range.js';

export const numbers = {
    clamp,
    isValid,
    parse,
    range,
} as const;
