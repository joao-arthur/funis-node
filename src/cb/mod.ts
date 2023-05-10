import { eq } from "./eq/eq.js";
import { ne } from "./ne/ne.js";
import { gt } from "./gt/gt.js";
import { ge } from "./ge/ge.js";
import { lt } from "./lt/lt.js";
import { le } from "./le/le.js";

export const cb = {
    eq,
    ne,
    gt,
    ge,
    lt,
    le,
} as const;
