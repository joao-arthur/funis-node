import { random as randomNum } from '../../numbers/random/random.js';

export function random<T>(arr: readonly T[]): T | undefined {
    return arr[randomNum(0, arr.length - 1)];
}
