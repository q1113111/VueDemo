module.exports = {
  devServer: {
    proxy: {
      '^/Service': {
        target: 'https://data.coa.gov.tw',
        changeOrigin: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/VueDEMO2/' : '/'
};
