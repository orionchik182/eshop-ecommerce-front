import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eshop-ecommerce.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**", // разрешить все пути, например /736x/...jpg
      },
      {
        protocol: "https",
        hostname: "sun9-30.userapi.com",
        port: "",
        pathname: "/**", // разрешить все пути, например /736x/...jpg
      },
    ],
  },
};

export default nextConfig;
