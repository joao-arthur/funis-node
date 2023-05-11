import { plainObject } from "../../types/plainObject.js";

/**
 * # serialize
 *
 * Serializes the plain properties to a json-like format that is friendly to read.
 *
 * ## Example
 *
 * ```ts
 * objects.serialize({
 *     name: 'Paul',
 *     numberOfBands: 4,
 *     alive: true,
 * }) // '{ name: Paul, numberOfBands: 4, alive: true }'
 * ```
 *
 * ```ts
 * objects.serialize({
 *     empty: [],
 *     oneValue: [1],
 *     multiValue: [true, false, 'zaphod', 42n],
 * }) // '{ empty: , oneValue: 1, multiValue: true, false, zaphod, 42 }'
 * ```
 *
 * ```ts
 * class Dog {
 *     constructor(private readonly name: string) { }
 *
 *     bark(): string {
 *         return `wolf! wolf! I'm ${this.name}!`;
 *     }
 * }
 *
 * objects.serialize(
 *     new Dog('Rex') as unknown as plainObject
 * ) // '{ name: Rex }'
 * ```
 */
export function serialize<const T>(obj: plainObject<T>): string {
    function valueToString(value: T): string {
        if (value instanceof Date) {
            return value.toISOString();
        }
        if (value instanceof Array) {
            return value.join(", ");
        }

        return String(value);
    }

    const entries = Object
        .entries(obj)
        .filter(([, value]) => typeof value !== "function")
        .map(
            ([key, value]) => `${key}: ${valueToString(value)}`,
        )
        .join(", ");
    return entries.length ? `{ ${entries} }` : "{ }";
}
