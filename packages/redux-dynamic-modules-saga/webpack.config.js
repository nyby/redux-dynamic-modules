let webpack = require("webpack");
let BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    let mode_env = argv.mode || "development";

    return {
        mode: mode_env,
        devtool: "source-map",
        entry: {
            main: "./lib/index",
        },

        output: {
            library: "@nyby/redux-dynamic-modules-saga",
            libraryTarget: "umd",
            filename:
                mode_env === "production"
                    ? "@nyby/redux-dynamic-modules-saga.min.js"
                    : "@nyby/redux-dynamic-modules-saga.js",
            path: __dirname + "/dist/",
        },

        externals: {
            react: "react",
            redux: "redux",
            "react-redux": "react-redux",
            "redux-saga": "redux-saga",
            "@nyby/redux-dynamic-modules-core": "@nyby/redux-dynamic-modules-core",
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: "static",
                reportFilename: `react-redux-module.stats.html`,
                openAnalyzer: false,
            }),
        ],
    };
};
