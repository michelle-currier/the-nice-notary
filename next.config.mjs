import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src"); // Ensure it's pointing to 'src'
    return config;
  },
  // experimental: {
  //   appDir: true, // Explicitly enable app directory
  // },

  // output: "export", // remove when working locally add back to build the static deploy
};

// const nextConfig = {
//   experimental: {
//     appDir: true, // Explicitly enable app directory
//   },
// };
export default nextConfig;
