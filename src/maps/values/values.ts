export function values<K, V>(instance: Map<K, V>): V[] {
    return Array.from(instance.values());
}
