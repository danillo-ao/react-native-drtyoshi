module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@theme': './src/theme',
          '@router': './src/router',
          '@configs': './src/configs'
        }
      }
    ],
    'jest-hoist'
  ],
};
