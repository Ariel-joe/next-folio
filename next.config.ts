// next.config.ts
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  webpack: (config: Configuration, { isServer }) => {
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "static/assets/",
              publicPath: isServer
                ? "../_next/static/assets/"
                : "/_next/static/assets/",
            },
          },
        ],
      });
    }

    return config;
  },
};

export default nextConfig;