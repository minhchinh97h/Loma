module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]

  const plugins = [
    ['@babel/plugin-transform-runtime'],
    ['babel-plugin-styled-components'],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~components': './components',
          '~styles': './styles'
        }
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}
