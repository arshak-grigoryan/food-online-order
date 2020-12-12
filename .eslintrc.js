module.exports = {
  "extends": [
    "react-app"
  ],
  "rules": {
    "quotes": ["warn", "single"],
    "jsx-quotes": ["warn", "prefer-single"]
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
  ]
}