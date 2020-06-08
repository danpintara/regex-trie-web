module.exports = {
  transform: {
    "^.+\\.(js|ts)x?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
}
