module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'require-jsdoc': [
            'off',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: true
                }
            }
        ],
        'valid-jsdoc': [
            'off',
            {
                prefer: {
                    arg: 'param',
                    argument: 'param',
                    returns: 'return',
                    constructor: 'class',
                    augments: 'extends',
                    const: 'constant',
                    defaultvalue: 'default',
                    desc: 'description',
                    host: 'external',
                    fileoverview: 'file',
                    overview: 'file',
                    emits: 'fires',
                    var: 'member',
                    prop: 'property',
                    exception: 'throws'
                },
                preferType: {
                    Boolean: 'boolean',
                    Null: 'null',
                    Undefined: 'undefined',
                    Number: 'number',
                    String: 'string',
                    Symbol: 'symbol',
                    object: 'Object',
                    array: 'Array',
                    function: 'Function'
                },
                requireReturn: false,
                matchDescription: '.+'
            }
        ],
        'no-useless-escape': 'warn',
        'standard/no-callback-literal': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'no-cond-assign': ['warn', 'except-parens'],
        'no-magic-numbers': [
            'warn',
            {
                ignoreArrayIndexes: true,
                ignore: [-1, 0, 1, 2, 3, 100, 10, 0.5, 1000, 360, 180]
            }
        ],
        'class-methods-use-this': [
            'error',
            {
                exceptMethods: ['getDSdef', 'getDSGroupdef', 'getName', 'getType', 'getDSType']
            }
        ],
        'valid-typeof': ['error', { requireStringLiterals: false }],
        'dot-notation': ['error', { allowKeywords: false }],
        'block-scoped-var': 'error',
        'array-callback-return': 'error',
        'no-alert': 'error',
        'no-console': 'error',
        'no-empty-function': 'error',
        'no-loop-func': 'error',
        'no-useless-concat': 'error',
        radix: 'error',
        eqeqeq: ["error", "always", { "null": "ignore" }],
        'no-catch-shadow': 'error',
        'no-shadow': ['error', { allow: ['err', 'error'] }],
        semi: ['error', 'always'],
        indent: ['error', 2, { SwitchCase: 1 }],
        'one-var': ['error', { initialized: 'always', uninitialized: 'always' }],
        'no-misleading-character-class': 'error',
        'curly': ['error', 'multi-line', 'consistent'],
        'guard-for-in': 'error',
        'max-classes-per-file': ["error", 10],
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-extra-label': 'error',
        'no-invalid-this': 'warn',
        'no-param-reassign': 'error',
        'no-restricted-properties': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-void': 'error',
        'no-useless-catch': 'error',
        'no-undefined': 'error',
        'consistent-return': 'warn',
        'default-case': 'warn',
        'require-unicode-regexp': 'warn',
        'react/prop-types': 'off',
        'standard/no-callback-literal': 'off'
    }
};