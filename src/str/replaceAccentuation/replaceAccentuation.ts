import { accents } from "../internal/accents.js";

/**
 * # replaceAccentuation
 *
 * Replace accentuated characters by unaccentuated ones.
 *
 * ## Example
 *
 * ```ts
 * str.replaceAccentuation('loção') // locao
 * str.replaceAccentuation('fianceé') // fiancee
 * str.replaceAccentuation('Äpfel') // Apfel
 * str.replaceAccentuation('këndon') // kendon
 * str.replaceAccentuation('pálmafák') // palmafak
 * ```
 */
export function replaceAccentuation(str: string): string {
    return Array.from(str)
        .map((letter) => accents.get(letter) || letter)
        .join("");
}
