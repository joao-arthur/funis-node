export function isValid(num: number | undefined | null): boolean {
    if (typeof num !== 'number')
        return false;
    if (num === 0) return true;
    return !!num;
}
