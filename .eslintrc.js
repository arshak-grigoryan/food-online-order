module.exports = {
  extends: [
    "airbnb/base",
    "react-app"
  ],
  rules: {
    "quotes": ["warn", "single"],
    "max-len": "off",
    "linebreak-style": "off", // prettier endOfLine
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "import/no-extraneous-dependencies": ["warn", { "devDependencies": true }],
  },
  overrides: [
    {
      "files": [
        "**/*.ts?(x)"
      ],
      "rules": {
        "additional-typescript-only-rule": "warn"
      }
    }
  ],
  settings : {
    // https://stackoverflow.com/questions/42264007/eslint-errorring-importing-jsx-without-extension
    "import/resolver": {
      "node": {
        "extensions": [".js",".jsx"]
      }
    }
  }
}



// module.exports = {
//   extends: [
//     "airbnb/base",
//     "react-app"
//   ],
//   rules: {
//     "quotes": ["warn", "single"],
//     "no-multiple-empty-lines": "warn",
//     "no-trailing-spaces": "warn",
//     "arrow-body-style": "warn", // if line length is bigger than max arrow will have return 
//     "object-curly-newline": ["warn", {
//       "ObjectExpression": { "multiline": true, "minProperties": 1 },
//       "ObjectPattern": { "multiline": true },
//       "ImportDeclaration": "never",
//       "ExportDeclaration": "never"
//     }],
//     "operator-linebreak": "warn",
//     "comma-dangle": ["error", "only-multiline"],
//     // "max-len": ["error", {
//     //   "code": 80,
//     //   "ignoreComments": true
//     // }], // prettier printWidth
//     "max-len": "off",
//     "linebreak-style": "off", // prettier endOfLine
//     "no-plusplus": "off",
//     // "indent": "off", // pretiier Tabs
//     // https://eslint.org/docs/rules/no-param-reassign#disallow-reassignment-of-function-parameters-no-param-reassign
//     // "no-param-reassign": ["warn", { "props": false }],
//     "no-param-reassign": "off",
//     // https://eslint.org/docs/rules/object-curly-spacing#enforce-consistent-spacing-inside-braces-object-curly-spacing
//     "import/no-extraneous-dependencies": ["warn", { "devDependencies": true }],
//   },
//   overrides: [
//     {
//       "files": [
//         "**/*.ts?(x)"
//       ],
//       "rules": {
//         "additional-typescript-only-rule": "warn"
//       }
//     }
//   ],
//   settings : {
//     // https://stackoverflow.com/questions/42264007/eslint-errorring-importing-jsx-without-extension
//     "import/resolver": {
//       "node": {
//         "extensions": [".js",".jsx"]
//       }
//     }
//   }
// }