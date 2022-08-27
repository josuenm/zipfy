module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
          root: ["."],
          alias: {
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@lib": "./src/lib",
            "@screens": "./src/screens",
          },
        },
      ],
    ],
  };
};
