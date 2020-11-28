const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/app.js")
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].js'
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};