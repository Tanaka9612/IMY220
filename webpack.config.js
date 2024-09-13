const path = require("path");


module.exports = {
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve('frontend', 'public'),
        filename: "bundle.js"
    },
    mode: "development",
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,  //ignore it otherwise it will be slow
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    }
}