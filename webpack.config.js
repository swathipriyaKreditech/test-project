const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ["./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/main.js"
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        proxy: {
            "/api": {
                target: "http://localhost:8000",
                pathRewrite: {"^/api" : ""}

            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?url=false','resolve-url-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader?url=false'
                }, {
                    loader: 'sass-loader'
                }
                    , {
                        loader: 'resolve-url-loader'
                    }]
            },
            {
                        test: /\.(png|jpg|svg)$/,
                        loader: 'url-loader'

            }
                ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]


};
