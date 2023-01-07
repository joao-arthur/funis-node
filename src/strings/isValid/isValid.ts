export function isValid(str: string | undefined | null): boolean {
    if (typeof str !== 'string')
        return false;
    if (str === '') 
        return true;

    return !!str;
}
