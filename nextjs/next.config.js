module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: process.env.NODE_ENV === 'development' ? 'http://localhost:3333/studio/:path*' : '/studio/index.html'
      },
      {
        source: '/__webpack_hmr',
        destination: 'http://localhost:3333/__webpack_hmr'
      }
    ]
  },
}
