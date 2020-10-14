const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) => ({
  entry: env.subsites
    ? ['./src/index.js', './src/school.js']
    : ['./src/index.js', './src/main.scss'],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
})
