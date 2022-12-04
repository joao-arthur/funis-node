export function replaceAccentuation(value: string): string {
    return value
        .replaceAll(/á|à|ã|ä|â/g, 'a')
        .replaceAll(/Á|À|Ã|Ä|Â/g, 'A')
        .replaceAll(/é|è|ẽ|ë|ê/g, 'e')
        .replaceAll(/É|È|Ẽ|Ë|Ê/g, 'E')
        .replaceAll(/í|ì|ĩ|ï|î/g, 'i')
        .replaceAll(/Í|Ì|Ĩ|Ï|Î/g, 'I')
        .replaceAll(/ó|ò|õ|ö|ô/g, 'o')
        .replaceAll(/Ó|Ò|Õ|Ö|Ô/g, 'O')
        .replaceAll(/ú|ù|ũ|ü|û/g, 'u')
        .replaceAll(/Ú|Ù|Ũ|Ü|Û/g, 'U')
        .replaceAll(/ç/g, 'c')
        .replaceAll(/Ç/g, 'C');
}
