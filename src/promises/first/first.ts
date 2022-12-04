export function first<T>(promises: Promise<T>[]): Promise<T> {
    return new Promise((resolve, reject) => {
        let resulted = false;

        promises.forEach(promise => {
            promise
                .then(value => {
                    if (!resulted) {
                        resolve(value);
                        resulted = true;
                    }
                })
                .catch(error => {
                    if (!resulted) {
                        reject(error);
                        resulted = true;
                    }
                });
        });
    });
}
