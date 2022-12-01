export function entries<K, V>(instance: Map<K, V>): [K, V][] {
    return Array.from(instance.entries());
}
