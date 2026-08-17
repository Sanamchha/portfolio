{
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["*.astro"],
      "parser": "astro-eslint-parser",
      "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "extraFileExtensions": [".astro"]
      },
      "plugins": ["astro"],
      "extends": ["plugin:astro/recommended"]
    }
  ]
}
