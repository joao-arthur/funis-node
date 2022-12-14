export function pascalCase(value: string): string {
    if (value === '')
        return '';
    return value
        .split(' ')
        .map(word =>
            // eslint-disable-next-line max-len
            word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase(),
        )
        .join('');
}
