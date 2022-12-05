export function snakeCase(value: string): string {
    return value
        .split(' ')
        .map(word => word.toLocaleLowerCase())
        .join('_');
}
