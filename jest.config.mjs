// jest.config.mjs
export default {
  testMatch: ['**/?(*.)+(test).[jt]sx'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    ],
  },
  moduleNameMapper: {
    // CSS/asset importlarını sahtele
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // Vite aliasları -> src
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^chakra/(.*)$': '<rootDir>/src/chakra/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^config/(.*)$': '<rootDir>/src/config/$1',
    '^contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^features/(.*)$': '<rootDir>/src/features/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  extensionsToTreatAsEsm: ['.jsx'],
}
