export function pascalCase(str: string): string {
    if (str === '')
        return '';

    return str
        .split(' ')
        .map(word =>
            // eslint-disable-next-line max-len
            word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase(),
        )
        .join('');
}
