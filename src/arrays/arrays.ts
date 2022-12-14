import { first } from './first/first.js';
import { groupToArray } from './groupToArray/groupToArray.js';
import { groupToMap } from './groupToMap/groupToMap.js';
import { groupToObject } from './groupToObject/groupToObject.js';
import { last } from './last/last.js';
import { sort } from './sort/sort.js';
import { unique } from './unique/unique.js';
import { disjoint } from './disjoint/disjoint.js';
import { intersect } from './intersect/intersect.js';

export const arrays = {
    groupToArray,
    groupToMap,
    groupToObject,
    first,
    last,
    sort,
    unique,
    disjoint,
    intersect,
} as const;
