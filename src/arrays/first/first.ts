export function first(arr: readonly []): undefined;

export function first<T>(arr: readonly T[]): T;

export function first<T>(arr: readonly T[]): T {
    return arr[0];
}
