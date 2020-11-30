const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js$)|(\.vue$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].js'
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
