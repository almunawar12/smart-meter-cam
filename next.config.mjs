/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sso.pptik.id",
        port: "",
        pathname: "/api/v1/",
      },
    ],
  },
};

export default nextConfig;
