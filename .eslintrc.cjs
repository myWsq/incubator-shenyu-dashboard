// eslint-disable-next-line no-undef

module.exports = {
  extends: ["alloy", "alloy/typescript", "alloy/vue"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
  },
};
