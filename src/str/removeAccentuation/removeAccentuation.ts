import { accents } from "../internal/accents.js";

/**
 * # removeAccentuation
 *
 * Remove accentuated characters.
 *
 * ## Example
 *
 * ```ts
 * str.removeAccentuation('loção') // loo
 * str.removeAccentuation('fianceé') // fiance
 * str.removeAccentuation('Äpfel') // pfel
 * str.removeAccentuation('këndon') // kndon
 * str.removeAccentuation('pálmafák') // plmafk
 * ```
 */
export function removeAccentuation(str: string): string {
    return Array.from(str)
        .filter((letter) => !accents.has(letter))
        .join("");
}
