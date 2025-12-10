import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const { ModuleFederationPlugin } = webpack.container;

export default {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3001,
    historyApiFallback: true
  },
  output: {
    publicPath: "auto"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "productApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductList": "./src/components/ProductList.js"
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
