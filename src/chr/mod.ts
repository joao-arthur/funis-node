import { throttle } from "./throttle/throttle.js";
import { debounce } from "./debounce/debounce.js";

export const chr = {
    throttle,
    debounce,
} as const;
