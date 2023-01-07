export function random(
    lower: number,
    upper: number,
): number {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
