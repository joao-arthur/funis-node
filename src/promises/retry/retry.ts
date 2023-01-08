import { objectify } from '../objectify/objectify.js';

export async function retry<V, E>(
    cb: () => Promise<V>,
    attempts: number,
): Promise<V | undefined> {
    if (attempts < 1)
        return undefined;
    for (let i = 1; i <= attempts; i++) {
        const result = await objectify<V, E>(cb());
        switch (result.type) {
            case 'resolved':
                return result.value;
            case 'rejected':
                if (i === attempts)
                    throw result.error;
        }
    }

    return undefined;
}
