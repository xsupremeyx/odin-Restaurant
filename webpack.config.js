// webpack.config.js
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//     mode: "production",
//     entry: "./src/index.js",
//     output: {
//         filename: "main.js",
//         path: path.resolve(__dirname, "dist"),
//         clean: true,
//     },
//     devtool: "eval-source-map",
//     devServer: {
//         watchFiles: ["./src/template.html"],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/template.html",
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ["style-loader", "css-loader"],
//             },
//             {
//                 test: /\.html$/i,
//                 loader: "html-loader",
//             },
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
//                 type: "asset/resource",
//             },
//             {
//                 test: /\.(woff|woff2|eot|ttf|otf)$/i,
//                 type: 'asset/resource',
//             },
//         ],
//     },
// };

// Deprecated webpack.config.js file. Configuration has been split into webpack.common.js, webpack.dev.js, and webpack.prod.js files.

// Please refer to those files for the updated configuration.

// This file is left here for reference and should not be used in the current setup.