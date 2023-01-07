type returnType<V, E> = {
    readonly value: V | undefined;
    readonly error: E | undefined;
    readonly type: 'resolved' | 'rejected';
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
