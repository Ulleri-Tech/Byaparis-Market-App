/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  output: 'standalone',
}

module.exports = nextConfig
