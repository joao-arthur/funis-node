/**
 * # kebabCase
 *
 * Transforms a sequence of words into kebab case.
 *
 * ## Example
 *
 * ```ts
 * strings.kebabCase('hey') // 'hey'
 * strings.kebabCase('j S o N') // 'j-s-o-n'
 * strings.kebabCase('j_S_o_N') // 'j-s-o-n'
 * strings.kebabCase('j-S-o-N') // 'j-s-o-n'
 * ```
 */
export function kebabCase(str: string): string {
    return str
        .split(/ |_|-/g)
        .map((word) => word.toLocaleLowerCase())
        .join("-");
}
