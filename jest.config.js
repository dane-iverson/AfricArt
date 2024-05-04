module.exports = {
  // Configure how Jest handles modules
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS/SCSS imports
    // Add other mappings as needed
  },
  moduleFileExtensions: ["js", "jsx", "json"], // Extensions to handle
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use Babel for transforming JS/JSX files
  },
  testEnvironment: "jest-environment-jsdom", // Jest's default test environment
};
