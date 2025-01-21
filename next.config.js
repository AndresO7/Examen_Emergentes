/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fuio13-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'media-bog2-2.cdn.whatsapp.net',
      }
    ],
  },
}

module.exports = nextConfig 