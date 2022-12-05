export function pascalCase(value: string): string {
    if (value === '')
        return '';
    return value
        .split(' ')
        .map(word =>
            word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase(),
        )
        .join('');
}
