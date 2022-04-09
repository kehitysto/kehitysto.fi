/** @type {import('next').NextConfig} */

const basePath = '';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  publicRuntimeConfig : { basePath }
}

module.exports = nextConfig
