import { compose } from './compose/compose.js';
import { pipe } from './pipe/pipe.js';

export const standard = {
    compose,
    pipe,
} as const;
