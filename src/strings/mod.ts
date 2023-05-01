import { camelCase } from "./camelCase/camelCase.js";
import { pascalCase } from "./pascalCase/pascalCase.js";
import { kebabCase } from "./kebabCase/kebabCase.js";
import { snakeCase } from "./snakeCase/snakeCase.js";
import { replaceAccentuation } from "./replaceAccentuation/replaceAccentuation.js";
import { removeAccentuation } from "./removeAccentuation/removeAccentuation.js";
import { isValid } from "./isValid/isValid.js";
import { random } from "./random/random.js";
import { compareAsc } from "./compareAsc/compareAsc.js";
import { compareDesc } from "./compareDesc/compareDesc.js";

export const strings = {
    camelCase,
    pascalCase,
    kebabCase,
    snakeCase,
    replaceAccentuation,
    removeAccentuation,
    isValid,
    random,
    compareAsc,
    compareDesc,
} as const;
