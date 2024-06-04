/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "power-cam.pptik.id",
        port: "",
        pathname: "/api/v1/images/**",
      },
    ],
  },
};

export default nextConfig;
