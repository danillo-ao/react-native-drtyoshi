module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@router': './src/router',
          '@screens': './src/screens',
          '@theme': './src/theme',
        }
      }
    ],
    'jest-hoist'
  ],
};
