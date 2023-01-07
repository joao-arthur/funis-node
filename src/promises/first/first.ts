export function first<T>(
    promises: readonly Promise<T>[],
): Promise<T> {
    return new Promise((resolve, reject) => {
        let resulted = false;

        promises.forEach(promise => {
            promise
                .then(value => {
                    if (!resulted) {
                        resulted = true;
                        resolve(value);
                    }
                })
                .catch(error => {
                    if (!resulted) {
                        resulted = true;
                        reject(error);
                    }
                });
        });
    });
}
