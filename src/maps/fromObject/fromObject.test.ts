import { describe, expect, it } from 'vitest';
import { fromObject } from './fromObject.js';

describe('fromObject', () => {
    it('should transform an empty object into a empty map', () => {
        expect(fromObject({})).toEqual(new Map([]));
    });

    it('should transform the object into a corresponding map', () => {
        expect(fromObject({
            Paul: 'Bass',
            John: 'Guitar',
            George: 'Guitar',
            Ringo: 'Drums',
        })).toEqual(new Map([
            ['Paul', 'Bass'],
            ['John', 'Guitar'],
            ['George', 'Guitar'],
            ['Ringo', 'Drums'],
        ]));
    });
});
