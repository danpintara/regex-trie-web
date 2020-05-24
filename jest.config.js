module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
}
