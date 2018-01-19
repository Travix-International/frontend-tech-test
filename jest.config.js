module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  setupTestFrameworkScriptFile: './config/setupTests',
  moduleDirectories: ['node_modules', 'src'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css)$': 'identity-obj-proxy',
  },
}
