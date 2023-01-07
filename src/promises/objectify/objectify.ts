type returnType<V, E> = {
    readonly value: V;
    readonly error: undefined;
    readonly type: 'resolved';
} | {
    readonly value: undefined;
    readonly error: E;
    readonly type: 'rejected';
};

export async function objectify<V, E>(
    promise: Promise<V>,
): Promise<returnType<V, E>> {
    try {
        return {
            value: await promise,
            error: undefined,
            type: 'resolved',
        };
    } catch (err) {
        return {
            value: undefined,
            error: err as E,
            type: 'rejected',
        };
    }
}
