const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    mode: "development", // Pretty self explanotary
    entry: { // Defines where to find the files
        bundle: path.resolve(__dirname, "src/index.js"), // Bundle is the name of the file
    },
    output: { // Define where to place all the processed files
        path: path.resolve(__dirname, "dist"),  // Defines where to place the files
        filename: "[name][contenthash].js", // [name] uses the name in entry and [contenthash] gives a random hash each time a change is made
        clean: true, // Deletes old files
        assetModuleFilename: "[name][contenthash][ext]" // Image file name
    },
    devtool: "source-map", // Generates source map
    devServer: {
        static: path.resolve(__dirname, "dist"), // Where the static files are
        port: 3000, // The port to serve on
        open: true, // Auto open
        hot: true, // Hot reload
        compress: true, // Use compression 
        historyApiFallback: true, // I dont know
        liveReload: true,
    },
    module: { // Contains rules, there are others too probbaly which I don't know about
        rules: [ // Array containing all the test and uses
            {
                test:/\.scss$/, // Define which types of files to apply the rule to
                use: [ //the loaders which will be applied to that file
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // i stands for not case sensitve
                type: "asset/resource",
            },
        ],
    },
    plugins: [ // Array containing all the plugins
        new HtmlWebpackPlugin({
            title: "Webpack app", //You can use this in the html by <%= htmlWebpackPlugin.options.title %>
            filename: "index.html", //name in dist
            template: "index.html", //what we use to create the dist html
        }),
    ]
}