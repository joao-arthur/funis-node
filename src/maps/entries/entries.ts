export function entries<K, V>(
    map: Map<K, V>,
): readonly (readonly [K, V])[] {
    return Array.from(map.entries());
}
