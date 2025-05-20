const path = require("path");

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["shared"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
