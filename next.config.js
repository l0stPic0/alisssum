/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.posiflora.online',
      },
    ],
  },
}

module.exports = nextConfig
