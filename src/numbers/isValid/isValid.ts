export function isValid(value: number | undefined | null): boolean {
    return !!value || value === 0;
}
