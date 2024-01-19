module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:vue/vue3-essential", "plugin:prettier/recommended"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json"
            },
            extends: ["plugin:@typescript-eslint/recommended"],
            rules: {
                "@typescript-eslint/dot-notation": "off",
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/no-explicit-any": "off"
            }
        }
    ],
    plugins: ["vue", "@typescript-eslint", "prettier"],
    rules: {
        semi: "off",
        "vue/no-multiple-template-root": "off",
        "vue/require-default-prop": "off",
        "vue/require-prop-types": "off",
        "comma-dangle": ["error", "never"],
        "vue/script-indent": ["error", 2, { baseIndent: 1 }],
        "vue/html-indent": ["error", 2, { baseIndent: 1 }],
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "never",
                    normal: "never",
                    component: "always"
                }
            }
        ],
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-explicit-any": "off"
    }
};
