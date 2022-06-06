const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", "css"],
  },
  // Указываем плагины для нашего проекта
  plugins: [
    // Создаст наш основной HTML в папке dist и привяжет наш js к HTML-файлу
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    // Плагин будет отчищать папку dist при повторном build(сборке)
    new CleanWebpackPlugin(),
  ],
  module: {
    // Прописываем правила для модулей
    rules: [
      {
        test: /\.(css|scss)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: ["file-loader"],
      },
      // for Babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // for Babel React
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
}
