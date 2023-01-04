export function kebabCase(str: string): string {
    return str
        .split(/ |_|-/g)
        .map(word => word.toLocaleLowerCase())
        .join('-');
}
