module.exports = {
    // The root of your source code, typically the directory containing your package.json file
    roots: ['<rootDir>/src'],
  
    // Jest transformations
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use Babel to transpile JavaScript files
    },
  
    // Setup files before tests are run
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  
    // Test environment options
    testEnvironment: 'node', // Run tests in a Node.js environment
  
    // Test match patterns
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  
    // Module file extensions
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  };
  