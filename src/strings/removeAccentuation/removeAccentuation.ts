import { accents } from "../internal/accents.js";

/**
 * # strings.removeAccentuation
 *
 * Remove accentuated characters.
 *
 * ## Example
 *
 * ```ts
 * strings.removeAccentuation('loção') // loo
 * strings.removeAccentuation('fianceé') // fiance
 * strings.removeAccentuation('Äpfel') // pfel
 * strings.removeAccentuation('këndon') // kndon
 * strings.removeAccentuation('pálmafák') // plmafk
 * ```
 */
export function removeAccentuation(str: string): string {
    return Array.from(str)
        .map((letter) => accents.has(letter) ? "" : letter).join("");
}
