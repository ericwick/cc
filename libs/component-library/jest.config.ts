/* eslint-disable */
export default {
  displayName: 'component-library',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/component-library',
  setupFilesAfterEnv: ['./src/index.spec.ts'],
  coveragePathIgnorePatterns: ['./src/index.spec.ts'],
  modulePathIgnorePatterns: ['./src/index.spec.ts'],
  testPathIgnorePatterns: ['./src/index.spec.ts'],
  watchPathIgnorePatterns: ['./src/index.spec.ts'],
};
