export const mode = "development";
export const output = {
  filename: "main.js",
  publicPath: "dist"
};

export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }
  ]
};
