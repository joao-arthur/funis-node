export function kebabCase(value: string): string {
    return value
        .split(' ')
        .map(word => word.toLocaleLowerCase())
        .join('-');
}
