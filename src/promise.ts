/**
 * # last
 *
 * Returns the last promise to resolve/reject.
 *
 * > This function sets a _then_ and _catch_ callback for every passed promise.
 * > This way, the only promise you can _then_ or _catch_ is the one returned by this function.
 *
 * ## Example
 *
 * ```ts
 * await last([
 *     rejectTimeout("Socrates", 50),
 *     resolveTimeout("Plato", 100),
 *     resolveTimeout("Aristotle", 200),
 * ]) // "Aristotle"
 * ```
 */
export function last<const T>(prms: readonly Promise<T>[]): Promise<T> {
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

type returnType<V, E> = {
    readonly value: V;
    readonly error: undefined;
    readonly type: "resolved";
} | {
    readonly value: undefined;
    readonly error: E;
    readonly type: "rejected";
};

/**
 * # proObjectify
 *
 * Returns an object with value and error entries corrensponding to resolved or rejected value of the promise.
 *
 * ## Example
 *
 * ```ts
 * await proObjectify(
 *     Promise.resolve(undefined)
 * ) // { value: undefined, error: undefined, type: "resolved" }
 * await proObjectify(
 *     Promise.resolve("Symbolic acts")
 * ) // { value: "Symbolic acts", error: undefined, type: "resolved" }
 * ```
 *
 * ```ts
 * await proObjectify(
 *     Promise.reject(undefined)
 * ) // { value: undefined, error: undefined, type: "rejected" }
 * await proObjectify(
 *     Promise.reject("So vivid")
 * ) // { value: undefined, error: "So vivid", type: "rejected" }
 * ```
 */
export async function objectify<V, E>(prm: Promise<V>): Promise<returnType<V, E>> {
    try {
        return {
            value: await prm,
            error: undefined,
            type: "resolved",
        };
    } catch (err) {
        return {
            value: undefined,
            error: err as E,
            type: "rejected",
        };
    }
}
/**
 * # rejectTimeout
 *
 * Returns a promise that rejects after the timeout.
 *
 * ## Example
 *
 * ```ts
 * try {
 *     await rejectTimeout("Hello, promise!", 500);
 * } catch (e) {
 *     e // "Hello, promise!"
 * }
 * ```
 */
export function rejectTimeout<const T>(valueToReject: T, timeout: number): Promise<T> {
    return new Promise((_, reject) => {
        globalThis.setTimeout(() => reject(valueToReject), timeout);
    });
}
/**
 * # resolveTimeout
 *
 * Returns a promise that resolves after the timeout.
 *
 * ## Example
 *
 * ```ts
 * await resolveTimeout("Hello, promise!", 500) // "Hello, promise!"
 * ```
 */
export function resolveTimeout<const T>(valueToResolve: T, timeout: number): Promise<T> {
    return new Promise((resolve) => {
        globalThis.setTimeout(() => resolve(valueToResolve), timeout);
    });
}

/**
 * # retry
 *
 * Tries to resolve the promise for the number of especified attempts.
 *
 * ## Example
 *
 * ```ts
 * let i = 1;
 *
 * retry(() => {
 *     i++;
 *     if (i === 5)
 *         return Promise.resolve("Ludwig van Beethoven");
 *     else
 *         return Promise.reject("Johann Sebastian Bach");
 * }, 10) // "Ludwig van Beethoven"
 * ```
 *
 * ```ts
 * try {
 *     await retry(Promise.reject("Donatello"), 5);
 * } catch (e) {
 *     e // "Donatello"
 * }
 * ```
 */
export async function retry<V, E>(cb: () => Promise<V>, attempts: number): Promise<V | undefined> {
    if (attempts < 1) {
        return undefined;
    }
    for (let i = 1; i <= attempts; i++) {
        const result = await objectify<V, E>(cb());
        switch (result.type) {
            case "resolved":
                return result.value;
            case "rejected":
                if (i === attempts) {
                    throw result.error;
                }
        }
    }
    return undefined;
}
