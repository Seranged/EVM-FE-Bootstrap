/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
  },
}
