export function camelCase(str: string): string {
    if (str === '')
        return '';
    return str
        .split(' ')
        .map((word, index) => index > 0
            // eslint-disable-next-line max-len
            ? word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
            : word.toLocaleLowerCase(),
        )
        .join('');
}
