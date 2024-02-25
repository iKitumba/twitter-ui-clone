/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
