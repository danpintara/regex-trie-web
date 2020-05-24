module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json",
    },
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
}
