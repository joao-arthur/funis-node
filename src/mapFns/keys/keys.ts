export function keys<K, V>(instance: Map<K, V>): K[] {
    return Array.from(instance.keys());
}
