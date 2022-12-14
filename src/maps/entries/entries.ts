export function entries<K, V>(
    instance: Map<K, V>,
): readonly (readonly [K, V])[] {
    return Array.from(instance.entries());
}
