import { describe, expect, it } from 'vitest';
import { lazyRange } from './lazyRange.js';

describe('lazyRange', () => {
    it('should return an iterable range of numbers inclusively', () => {
        const itter = lazyRange(-1, 2);
        expect(itter.next()).toEqual({ done: false, value: -1 });
        expect(itter.next()).toEqual({ done: false, value: 0 });
        expect(itter.next()).toEqual({ done: false, value: 1 });
        expect(itter.next()).toEqual({ done: true, value: 2 });
    });

    it('should return empty iterator when min is greater than max', () => {
        const itter = lazyRange(2, -1);
        expect(itter.next()).toEqual({ done: true, value: 2 });
    });

    it('should return an iterable range of numbers respecting the step', () => {
        const itter = lazyRange(2, 5.3, 0.5);
        expect(itter.next()).toEqual({ done: false, value: 2 });
        expect(itter.next()).toEqual({ done: false, value: 2.5 });
        expect(itter.next()).toEqual({ done: false, value: 3 });
        expect(itter.next()).toEqual({ done: false, value: 3.5 });
        expect(itter.next()).toEqual({ done: false, value: 4 });
        expect(itter.next()).toEqual({ done: false, value: 4.5 });
        expect(itter.next()).toEqual({ done: true, value: 5 });
    });
});
