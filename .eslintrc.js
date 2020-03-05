module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    plugins: ['react-hooks'],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        'linebreak-style': ['error', 'windows'],
        semi: ['error', 'always'],
        'max-lines': [
            //Max lines in file
            'warn',
            200,
        ],
        'max-lines-per-function': [
            //Max lines in function
            'warn',
            50,
        ],
        complexity: [
            //Simplify function according to single responsibility pattern from SOLID
            'warn',
            5,
        ],
        'max-nested-callbacks': [
            //To avoid callback hell
            'warn',
            2,
        ],
        'max-depth': [
            //Avoid many nested 'if' cycle
            'warn',
            3,
        ],
        'max-params': ['warn', 5],
        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости эффекта
        'react/react-in-jsx-scope': 'off', // Для избежания warnings со стороны next.js
        'no-nested-ternary': 0, // ? ... : ... ? ... :
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    globals: {
        React: 'writable',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
