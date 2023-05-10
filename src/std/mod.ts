import { compose } from "./compose/compose.js";
import { pipe } from "./pipe/pipe.js";
import { self } from "./self/self.js";
import { throttle } from "./throttle/throttle.js";
import { debounce } from "./debounce/debounce.js";

export const std = {
    compose,
    pipe,
    self,
    throttle,
    debounce,
} as const;
