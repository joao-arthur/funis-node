/**
 * # last
 *
 * Returns the last promise to resolve/reject.
 *
 * > This function sets a *then* and *catch* callback for every passed promise.
 * > This way, the only promise you can *then* or *catch* is the one returned by this function.
 *
 * ## Example
 *
 * ```ts
 * await prm.last([
 *     prm.rejectTimeout('Socrates', 50),
 *     prm.resolveTimeout('Plato', 100),
 *     prm.resolveTimeout('Aristotle', 200),
 * ]) // 'Aristotle'
 * ```
 */
export function last<const T>(
    prms: readonly Promise<T>[],
): Promise<T> {
    return new Promise((resolve, reject) => {
        let resulted = 0;

        prms.forEach((promise) => {
            promise
                .then((value) => {
                    if (resulted === prms.length - 1) {
                        resolve(value);
                    } else {
                        resulted++;
                    }
                })
                .catch((error) => {
                    if (resulted === prms.length - 1) {
                        reject(error);
                    } else {
                        resulted++;
                    }
                });
        });
    });
}
