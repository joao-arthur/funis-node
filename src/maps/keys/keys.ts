export function keys<K, V>(map: Map<K, V>): readonly K[] {
    return Array.from(map.keys());
}
