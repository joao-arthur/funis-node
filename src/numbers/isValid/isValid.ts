export function isValid(num: number | undefined | null): boolean {
    return typeof num === 'number' && (!!num || num === 0);
}
