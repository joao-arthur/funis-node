import { describe, expect, it } from 'vitest';
import { plainObject } from '../../types/plainObject.js';
import { serialize } from './serialize.js';

describe('serialize', () => {
    it('should serialize the plain entries', () => {
        const object = {
            name: 'Paul',
            numberOfBands: 4,
            bigNumberOfBands: 4n,
            alive: true,
            birthday: new Date(1942, 5, 18),
            unique: Symbol('Paul'),
        } as const;

        expect(serialize(object)).toEqual(
            '{ name: Paul, numberOfBands: 4, bigNumberOfBands: 4, alive: true, birthday: 1942-06-18T03:00:00.000Z, unique: Symbol(Paul) }',
        );
    });

    it('should remove the function entries', () => {
        const object = {
            sayHi: () => 'hi, my name is Eminem',
            sayGoodbye: () => 'bye, bye, baby',
        } as const;

        expect(serialize(object)).toEqual('{ }');
    });

    it('should serialize the array entries', () => {
        const object = {
            empty: [],
            oneValue: [1],
            multiValue: [true, false, 'zaphod', 42n],
        } as const;

        expect(serialize(object)).toEqual(
            '{ empty: , oneValue: 1, multiValue: true, false, zaphod, 42 }',
        );
    });

    it('should serialize class instances', () => {
        class Dog {
            constructor(private readonly name: string) { }

            bark(): string {
                return 'wolf! wolf!';
            }
        }

        expect(serialize(new Dog('Rex') as unknown as plainObject)).toEqual('{ name: Rex }');
    });
});
