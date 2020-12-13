module.exports = {
  "extends": [
    "airbnb/base",
    "react-app"
  ],
  "rules": {
    // ruleValue ? ok : warn
    "quotes": ["warn", "single"],
    "linebreak-style": "warn",
    "arrow-body-style": "warn",
    "object-curly-newline": "warn",
    "comma-dangle": "warn",
    "operator-linebreak": "warn",
    "no-plusplus": "off",
    // https://eslint.org/docs/rules/no-param-reassign#disallow-reassignment-of-function-parameters-no-param-reassign
    // "no-param-reassign": ["warn", { "props": false }],
    "no-param-reassign": "off",
    // https://eslint.org/docs/rules/object-curly-spacing#enforce-consistent-spacing-inside-braces-object-curly-spacing
    "import/no-extraneous-dependencies": ["warn", { "devDependencies": true }],
  },
  "overrides": [
    {
      "files": [
        "**/*.ts?(x)"
      ],
      "rules": {
        "additional-typescript-only-rule": "warn"
      }
    }
  ],
  "settings" : {
    // https://stackoverflow.com/questions/42264007/eslint-errorring-importing-jsx-without-extension
    "import/resolver": {
      "node": {
        "extensions": [".js",".jsx"]
      }
    }
  }
}