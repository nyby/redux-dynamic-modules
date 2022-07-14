module.exports = (env, argv) => {
    let mode_env = argv.mode || "development";

    return {
        devtool: "source-map",
        entry: {
            main: "./lib/index",
        },

        output: {
            library: "@nyby/redux-dynamic-modules-core",
            libraryTarget: "umd",
            filename:
                mode_env === "production"
                    ? "@nyby/redux-dynamic-modules-core.min.js"
                    : "@nyby/redux-dynamic-modules-core.js",
            path: __dirname + "/dist/",
        },

        externals: {
            "prop-types": "prop-types",
            react: "react",
            redux: "redux",
        }
    };
};
