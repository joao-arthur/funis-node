export function parseSuffixed(value: string, suffix: string): number | undefined {
    const parsed = Number(value.slice(0, value.indexOf(suffix)));

    return !Number.isNaN(parsed) ? parsed : undefined;
}
