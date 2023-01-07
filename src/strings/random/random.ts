import { random as randomNum } from '../../numbers/random/random.js';

export function random(str: string): string {
    if (!str.length)
        return '';

    return str[randomNum(0, str.length - 1)];
}
