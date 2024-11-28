/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "images.unsplash.com"
      }
    ],
    unoptimized : true
  },
  output : "export"
};

export default nextConfig;
