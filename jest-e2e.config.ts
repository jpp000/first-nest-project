export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.e2e-spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCorverageFrom: ['**/*.(t|j)s'],
  corverageDirectory: '../corverage',
  testEnvironment: 'node',
}
