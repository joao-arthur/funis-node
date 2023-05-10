import { clamp } from "./clamp/clamp.js";
import { parse } from "./parse/parse.js";
import { range } from "./range/range.js";
import { isValid } from "./isValid/isValid.js";
import { random } from "./random/random.js";
import { compareAsc } from "./compareAsc/compareAsc.js";
import { compareDesc } from "./compareDesc/compareDesc.js";
import { toFixed } from "./toFixed/toFixed.js";

export const numbers = {
    clamp,
    parse,
    range,
    isValid,
    random,
    compareAsc,
    compareDesc,
    toFixed,
} as const;
