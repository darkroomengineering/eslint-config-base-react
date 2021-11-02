module.exports = {
  parser: "babel-eslint",
  extends: [
    "standard",
    "standard-jsx",
    "standard-react", // or whatever you chose as your base config
    "plugin:prettier/recommended", // this will stop Prettier and ESLint from fighting over fixes
    "prettier",
  ],
  env: {
    browser: true,
  },
  plugins: ["prettier"],
  ignorePatterns: ["node_modules", ".next", ".now"],
  rules: {
    // make Prettier return errors
    "prettier/prettier": [
      "error",
      {
        // Optional Prettier config changes
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: false,
        trailingComma: "none",
        bracketSameLine: false,
        semi: false,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": "off",
  },
};
