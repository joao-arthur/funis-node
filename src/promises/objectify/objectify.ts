type returnType<V, E> = {
    readonly value: V;
    readonly error: undefined;
    readonly type: 'resolved';
} | {
    readonly value: undefined;
    readonly error: E;
    readonly type: 'rejected';
};

/**
 * # promises.objectify
 *
 * Returns an object with value and error entries corrensponding to resolved or rejected value of the promise.
 *
 * ## Example
 *
 * ```ts
 * await promises.objectify(
 *     Promise.resolve(undefined)
 * ) // { value: undefined, error: undefined, type: 'resolved' }
 * await promises.objectify(
 *     Promise.resolve('Symbolic acts')
 * ) // { value: 'Symbolic acts', error: undefined, type: 'resolved' }
 * ```
 *
 * ```ts
 * await promises.objectify(
 *     Promise.reject(undefined)
 * ) // { value: undefined, error: undefined, type: 'rejected' }
 * await promises.objectify(
 *     Promise.reject('So vivid')
 * ) // { value: undefined, error: 'So vivid', type: 'rejected' }
 * ```
 */
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
