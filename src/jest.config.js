export default {
    preset: 'ts-jest/presets/default-esm', // use this for TypeScript + ESM
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      '/node_modules/(?!(@bundled-es-modules|msw)/)' // transform msw and its ESM deps
    ],
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    moduleNameMapper: {
      "^(\\.{1,2}/.*)\\.js$": "$1"
    },
  };