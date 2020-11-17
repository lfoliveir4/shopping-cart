module.exports = {
  testMatch: ["<rootDir>/src/**/*.test.js", "<rootDir>/src/**/*.spec.js"],
  modulePaths: ["<rootDir>/src/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coverageDirectory: "<rootDir>/react-coverage",
  coverageReporters: ["text-summary"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  moduleFileExtensions: ["js", "jsx"],
};
