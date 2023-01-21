/**
 * # strings.snakeCase
 *
 * Transforms a sequence of words into snake case.
 *
 * ## Example
 *
 * ```ts
 * strings.snakeCase('hey') // 'hey'
 * strings.snakeCase('j S o N') // 'j_s_o_n'
 * strings.snakeCase('j_S_o_N') // 'j_s_o_n'
 * strings.snakeCase('j-S-o-N') // 'j_s_o_n'
 * ```
 */
export function snakeCase(str: string): string {
    return str
        .split(/ |_|-/g)
        .map(word => word.toLocaleLowerCase())
        .join('_');
}
