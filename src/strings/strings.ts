import { camelCase } from './camelCase/camelCase.js';
import { pascalCase } from './pascalCase/pascalCase.js';
import { kebabCase } from './kebabCase/kebabCase.js';
import { snakeCase } from './snakeCase/snakeCase.js';
import { replaceAccentuation } from './replaceAccentuation/replaceAccentuation.js';
import { isValid } from './isValid/isValid.js';

export const strings = {
    camelCase,
    pascalCase,
    kebabCase,
    snakeCase,
    replaceAccentuation,
    isValid,
} as const;
