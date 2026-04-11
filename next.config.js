/** @type {import('next').NextConfig} */
const nextConfig = {     
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/service/mobile-apps',
        destination: '/service/applications',
        permanent: true,
      },
      {
        source: '/service/mvp-building',
        destination: '/service/mvp-builds',
        permanent: true,
      },
      {
        source: '/blog-details-2',
        destination: '/blog',
        permanent: true,
      },
    ];
  },

}

module.exports = nextConfig
