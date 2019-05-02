const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

let plugins = [];

module.exports = (env, argv) => {
    let mode = argv.mode;
    let isDev = argv.mode == "development" ? true : false;

    return {
        mode: mode,
        entry: {
            core: "./src/js/core.js",
            app: "./src/js/app.js"
        },
        output: {
            path: path.resolve(__dirname, "dist/js"),
            publicPath: "/dist/js",
            filename: "[name].js"
        },
        watchOptions: {
            ignored: /node_modules/
        },
        devServer: {
            compress: true,
            open: "Google Chrome"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [
                                    require("autoprefixer")({
                                        browsers: ["> 1%", "last 2 versions"]
                                    })
                                ]
                            }
                        },
                        {
                            loader: "sass-loader",
                            query: {
                                outputStyle: isDev ? "expanded" : "compressed",
                                sourceMap: false,
                                sourceMapContents: false
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: isDev ? "../css/main.css" : "../css/main.min.css"
            }),
            new PrettierPlugin({
                configFile: "config/.prettierrc.json",
                extensions: [".css", ".scss", ".js", ".json", "html"]
            })
            // new CleanWebpackPlugin({
            //     verbose: isDev,
            //     dry: isDev,
            //     // cleanOnceBeforeBuildPatterns: [
            //     //     path.join(process.cwd(), "dist/**/*")
            //     // ]
            // })
        ]
    };
};
