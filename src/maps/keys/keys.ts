export function keys<K, V>(instance: Map<K, V>): readonly K[] {
    return Array.from(instance.keys());
}
