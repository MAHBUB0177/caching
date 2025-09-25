import withPWA from "next-pwa";
import { NextConfig } from "next";

const runtimeCaching = [
  {
    urlPattern: /^\/_next\/static\/.*/,
    handler: "StaleWhileRevalidate",
    options: { cacheName: "static-resources" },
  },
  {
    urlPattern: /^\/_next\/image\/.*/,
    handler: "StaleWhileRevalidate",
    options: { cacheName: "image-cache" },
  },
  {
    urlPattern: /^\/.*$/,
    handler: "NetworkFirst",
    options: { cacheName: "pages-cache" },
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
};

export default withPWA({
  ...nextConfig,
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // runtimeCaching,
});
