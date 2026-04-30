/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "", // TODO: user fills in e.g. '/nishchal-portfolio'
  assetPrefix: "",
};

module.exports = nextConfig;
