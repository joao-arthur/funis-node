export function snakeCase(str: string): string {
    return str
        .split(' ')
        .map(word => word.toLocaleLowerCase())
        .join('_');
}
