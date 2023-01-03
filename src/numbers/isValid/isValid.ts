export function isValid(num: number | undefined | null): boolean {
    return !!num || num === 0;
}
