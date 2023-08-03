import { groupToEntries } from "./groupToEntries/groupToEntries.js";
import { groupToArray } from "./groupToArray/groupToArray.js";
import { groupToMap } from "./groupToMap/groupToMap.js";
import { groupToObject } from "./groupToObject/groupToObject.js";
import { unique } from "./unique/unique.js";
import { disjoint } from "./disjoint/disjoint.js";
import { intersect } from "./intersect/intersect.js";
import { once } from "./once/once.js";
import { combinate } from "./combinate/combinate.js";
import { random } from "./random/random.js";
import { repeat } from "./repeat/repeat.js";

export const arr = {
    groupToEntries,
    groupToArray,
    groupToMap,
    groupToObject,
    unique,
    disjoint,
    intersect,
    once,
    combinate,
    random,
    repeat,
} as const;
