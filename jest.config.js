module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: 'jsdom', // または 'node'、必要に応じて
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
