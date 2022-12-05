import { camelCase } from './camelCase/camelCase.js';
import { pascalCase } from './pascalCase/pascalCase.js';
import { snakeCase } from './snakeCase/snakeCase.js';
import { replaceAccentuation } from './replaceAccentuation/replaceAccentuation.js';

export const strings = {
    camelCase,
    pascalCase,
    snakeCase,
    replaceAccentuation,
} as const;
