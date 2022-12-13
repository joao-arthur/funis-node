export function values<K, V>(instance: Map<K, V>): readonly V[] {
    return Array.from(instance.values());
}
