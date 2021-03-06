module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ],
    "curly": [
      2,
      "all"
    ],
    "camelcase": [
      2,
      {
        "properties": "always"
      }
    ],
    "eqeqeq": [
      2,
      "smart"
    ],
    "one-var-declaration-per-line": [
      2,
      "always"
    ],
    "new-cap": 2,
    "no-case-declarations": 0
  }
};
