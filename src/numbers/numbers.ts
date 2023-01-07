import { clamp } from './clamp/clamp.js';
import { parse } from './parse/parse.js';
import { range } from './range/range.js';
import { isValid } from './isValid/isValid.js';
import { random } from './random/random.js';

export const numbers = {
    clamp,
    parse,
    range,
    isValid,
    random,
} as const;
