module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    './src/**',
    '!**/src/**/*.stories.{js}',
    '!**/src/components/**/*.stories.{js}',
    '!**/src/helpers/**',
    '!**/test/**',
    '!**/src/routes/**/*',
    '!**/__mocks__/*',
    '!**/src/utils/*',
    '!**/src/mocks/*',
    '!**/src/layouts/*',
    '!**/src/services/*',
    '!./server.js'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  coverageThreshold: {
    global: {
      lines: 80
    }
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!pinia/.*)',
    '<rootDir>/node_modules/(?!@pinia/testing)',
    '<rootDir>/node_modules/(?!vue-demi/.*)',
    '<rootDir>/node_modules/(?!@vue/test-utils)'
  ],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};
