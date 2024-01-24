/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "dist", ".js"],
  verbose: true,
  testTimeout: 20000,
  roots: ["<rootDir>/__test__"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/test/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 55,
      lines: 80,
      statements: 80,
    },
  },
};
