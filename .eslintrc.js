module.exports = {
  "extends": [
    "react-app"
  ],
  "rules": {
    "quotes": ["warn", "single"]
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