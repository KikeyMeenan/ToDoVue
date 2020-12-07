module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8090/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
  },
};
