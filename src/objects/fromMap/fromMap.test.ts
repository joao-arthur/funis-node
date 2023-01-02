import { describe, expect, it } from 'vitest';
import { fromMap } from './fromMap.js';

describe('fromMap', () => {
    it('should transform an empty object into a empty map', () => {
        expect(fromMap(new Map([]))).toEqual({});
    });

    it('should transform the object into a corresponding map', () => {
        expect(fromMap(new Map([
            ['Paul', 'Bass'],
            ['John', 'Guitar'],
            ['George', 'Guitar'],
            ['Ringo', 'Drums'],
        ]))).toEqual({
            Paul: 'Bass',
            John: 'Guitar',
            George: 'Guitar',
            Ringo: 'Drums',
        });
    });
});
