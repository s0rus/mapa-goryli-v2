/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["cdn.discordapp.com"],
  },
};

module.exports = nextConfig;
