import { mapEntries } from "./mapEntries/mapEntries.js";
import { mapKeys } from "./mapKeys/mapKeys.js";
import { mapValues } from "./mapValues/mapValues.js";
import { entries } from "./entries/entries.js";
import { keys } from "./keys/keys.js";
import { values } from "./values/values.js";
import { fromObject } from "./fromObject/fromObject.js";

export const map = {
    mapEntries,
    mapKeys,
    mapValues,
    entries,
    keys,
    values,
    fromObject,
} as const;
