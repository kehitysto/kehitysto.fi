/** @type {import('next').NextConfig} */

let basePath = '';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  publicRuntimeConfig : { basePath }
}

module.exports = nextConfig
