import { compose } from "./compose/compose.js";
import { pipe } from "./pipe/pipe.js";
import { self } from "./self/self.js";

export const std = {
    compose,
    pipe,
    self,
} as const;
