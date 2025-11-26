import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   devIndicators: {
    appIsrStatus: false,
  },
  /* config options here */
  experimental: {
    allowedDevOrigins: [
      "http://192.168.68.115:3000",
      "http://192.168.68.115",
      "http://localhost:3000",
      "http://0.0.0.0:3000"
    ],
  }

};

export default nextConfig;
