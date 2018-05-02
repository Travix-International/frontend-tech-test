// ToDo: Add this file to rendering-engine-core and remove eslint packages from package.json
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: ['airbnb'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            classes: true,
        },
    },
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
        'react/jsx-filename-extension': 0,
        indent: ['error', 4, { "SwitchCase": 1 }],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-ally/click-events-have-key-events': 'off',
        'linebreak-style': 0,
        'no-param-reassign': ['error', { props: false }],
        'object-curly-spacing': ['off', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'class-methods-use-this': 'off',
        'max-len': [
            'error',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-use-before-define': ['error', { functions: false }],
        'no-underscore-dangle': ['off'],
        'no-return-assign': 'off', // for use: (this.componentEl = ref)
        'no-restricted-syntax': 'off',
        'no-duplicate-imports': 'off', // we use eslint-import-plugin instead
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'arrow-parens': ['error', 'as-needed'],
        'function-paren-newline': 'off',
        'object-curly-newline': 'off',
        // react
        'react/no-danger': 0,
        'react/no-array-index-key': 0,
        'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/require-default-props': 'off',
        'react/forbid-prop-types': ['error'],
        'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
        'react/prop-types': 'off'
        // 'react/prop-types': [
        //     'error',
        //     {
        //         ignore: ['children', 'location', 'props'],
        //         customValidators: [],
        //     },
        // ], need add prop types

    },
    settings: {
        'import/resolver': {
            webpack: {
                config: {
                    resolve: {
                        modules: ['./', 'storybook', 'node_modules'],
                        extensions: ['.js', '.jsx'],
                    },
                },
            },
        },
    },
};