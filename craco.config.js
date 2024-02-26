const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@features': path.resolve(__dirname, 'src/features'),
    },
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/app/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@shared/(.*)$': '<rootDir>/src/shared/$1',
        '^@features/(.*)$': '<rootDir>/src/features/$1',
        '^axios$': 'axios/dist/node/axios.cjs',
      },
    },
    modulePaths: ['<rootDir>'],
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      // process `*.tsx` files with `ts-jest`
    },
    setupFiles: ['./jest.polyfills.js'],
  },
};
