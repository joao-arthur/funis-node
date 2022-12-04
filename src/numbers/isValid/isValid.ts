export function isValid(value: number | undefined | null) {
    return !!value || value === 0;
}
