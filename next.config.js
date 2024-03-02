// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: "/_next",
            outputPath: "static/media",
            name: "[name].[hash].[ext]",
          },
        },
      });
    }
    return config;
  },
};
