export function parsePrefixed(value: string, prefix: string): number | undefined {
    if (value.indexOf(prefix) === -1)
        return undefined;
    const parsed = Number(value.slice(value.indexOf(prefix) + prefix.length));

    return !Number.isNaN(parsed) ? parsed : undefined;
}
