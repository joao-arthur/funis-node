export function kebabCase(str: string): string {
    return str
        .split(' ')
        .map(word => word.toLocaleLowerCase())
        .join('-');
}
