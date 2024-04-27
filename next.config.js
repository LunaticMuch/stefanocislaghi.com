/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mzstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.itunes-apple.com.akadns.net',
        port: '',
      },
    ],
  },
};
