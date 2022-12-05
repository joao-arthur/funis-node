import { camelCase } from './camelCase/camelCase.js';
import { pascalCase } from './pascalCase/pascalCase.js';
import { replaceAccentuation } from './replaceAccentuation/replaceAccentuation.js';

export const strings = {
    camelCase,
    pascalCase,
    replaceAccentuation,
} as const;
