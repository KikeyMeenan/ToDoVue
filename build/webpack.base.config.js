const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/app.js")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /(\.js$)/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].js'
  }
};