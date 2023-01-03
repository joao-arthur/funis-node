export function last<T>(promises: readonly Promise<T>[]): Promise<T> {
    return new Promise((resolve, reject) => {
        let resulted = 0;

        promises.forEach(promise => {
            promise
                .then(value => {
                    if (resulted === promises.length - 1)
                        resolve(value);
                    else
                        resulted++;
                })
                .catch(error => {
                    if (resulted === promises.length - 1)
                        reject(error);
                    else
                        resulted++;
                });
        });
    });
}
