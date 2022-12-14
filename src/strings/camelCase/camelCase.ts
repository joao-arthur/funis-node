export function camelCase(value: string): string {
    if (value === '')
        return '';
    return value
        .split(' ')
        .map((word, index) => index > 0
            // eslint-disable-next-line max-len
            ? word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
            : word.toLocaleLowerCase(),
        )
        .join('');
}
