module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.NODE_ENV === 'production'
      ? '/landing-ui/' // prod
      : '/', // dev
}
