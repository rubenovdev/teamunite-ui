"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var webpack_1 = __importDefault(require("webpack"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
var tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
var webpackConfig = function (env) { return (__assign(__assign({ entry: './src/index.tsx' }, (env.production || !env.development ? {} : { devtool: 'eval-source-map' })), { resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new tsconfig_paths_webpack_plugin_1.TsconfigPathsPlugin()],
        alias: {
            components: path_1.default.join(__dirname, 'src', 'components'),
            assets: path_1.default.join(__dirname, 'src', 'assets'),
            src: path_1.default.join(__dirname, 'src'),
        }
    }, output: {
        path: path_1.default.join(__dirname, '/dist'),
        filename: 'build.js',
    }, devServer: {
        historyApiFallback: true,
        hot: true
    }, module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /dist/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'typings-for-css-modules-loader?modules&namedExport&camelCase',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                    },
                },
            },
        ],
    }, plugins: [
        new html_webpack_plugin_1.default({
            template: './public/index.html',
        }),
        new webpack_1.default.DefinePlugin({
            'process.env.PRODUCTION': env.production || !env.development,
            'process.env.NAME': JSON.stringify(require('./package.json').name),
            'process.env.VERSION': JSON.stringify(require('./package.json').version),
        }),
        new fork_ts_checker_webpack_plugin_1.default({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}',
            },
        }),
    ] })); };
exports.default = webpackConfig;
//# sourceMappingURL=webpack.config.js.map