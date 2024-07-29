module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '10'
        },
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src'
        }
      }
    ]
  ]
};
