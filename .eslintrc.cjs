module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'import/prefer-default-export': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase'],
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
        ],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-extra-parens': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'no-implicit-globals': 'error',
        'default-case': 'off',
        'no-restricted-syntax': 'off',
        curly: ['error', 'multi'],
        'nonblock-statement-body-position': ['error', 'below'],
        'object-curly-newline': ['error', {
            ObjectExpression: {
                multiline: true,
                consistent: true,
            },
            ObjectPattern: {
                multiline: true,
            },
            ImportDeclaration: {
                multiline: false,
                consistent: true,
            },
            ExportDeclaration: {
                multiline: true,
                minProperties: 0,
            },
        }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'eol-last': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'quote-props': ['error', 'as-needed'],
        'max-len': ['error', {
            code: 70,
            tabWidth: 4,
            comments: 70,
            ignoreStrings: true,
        }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
        'max-statements-per-line': ['error', { max: 1 }],
    },
};
