const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const targetUrl = process.env.TARGET_URL || "http://127.0.0.1:8000";

module.exports = (env, argv) => {
    const isDev = argv.mode === "development";

    const cssLoaders = [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
        {
            loader: "sass-loader",
            options: {
                sassOptions: {
                    includePaths: [path.resolve(__dirname, "node_modules")],
                    quietDeps: true,
                },
                warnRuleAsWarning: false,
                sourceMap: isDev,
            },
        },
    ];

    if (isDev) {
        cssLoaders.splice(2, 1);
    }

    return {
        entry: {
            main: "./src/ts/main.ts",
            style: "./src/scss/index.scss",
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "public"),
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: cssLoaders,
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new RemoveEmptyScriptsPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: "src/images", to: "images" },
                    { from: "src/fonts", to: "fonts" },
                ],
            }),
        ],
        devServer: {
            static: {
                directory: path.resolve(__dirname, "public"),
                publicPath: "/",
            },
            compress: true,
            hot: true,
            port: 8080,
            host: "0.0.0.0",
            liveReload: true,
            open: true,
            devMiddleware: {
                writeToDisk: true,
            },
            watchFiles: ["src/**/*"],
            proxy: [
                {
                    context: ["/"],
                    target: targetUrl,
                    secure: false,
                    changeOrigin: true,
                },
            ],
            client: {
                overlay: {
                    warnings: false,
                    errors: true,
                },
            },
        },
        stats: {
            warnings: false,
            errorDetails: false,
            orphanModules: false,
            modules: false,
            children: false,
            logging: "error",
        },
    };
};
