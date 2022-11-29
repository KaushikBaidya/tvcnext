/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com"],
  },
  i18n: {
    locales: ["en", "vn"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
