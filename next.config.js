/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
  ]},
  reactStrictMode: false,
};

module.exports = nextConfig;
