module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-syntax-jsx', '@babel/plugin-transform-runtime']
};
