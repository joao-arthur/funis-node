import { accents } from '../internal/accents.js';

/**
 * # strings.replaceAccentuation
 *
 * Replace accentuated characters by unaccentuated ones.
 *
 * ## Example
 *
 * ```ts
 * strings.replaceAccentuation('loção') // locao
 * strings.replaceAccentuation('fianceé') // fiancee
 * strings.replaceAccentuation('Äpfel') // Apfel
 * strings.replaceAccentuation('këndon') // kendon
 * strings.replaceAccentuation('pálmafák') // palmafak
 * ```
 */
export function replaceAccentuation(str: string): string {
    return Array.from(str)
        .map(letter => accents.get(letter) || letter)
        .join('');
}
