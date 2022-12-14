export function values<K, V>(map: Map<K, V>): readonly V[] {
    return Array.from(map.values());
}
