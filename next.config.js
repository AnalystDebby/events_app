/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "hydeparkwinterwonderland.com",
        port: "",
      },
    ],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
};
