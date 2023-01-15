/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
