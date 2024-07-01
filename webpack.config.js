const path = require("path");

module.exports ={

    mode : "development",
    entry : "./src/index.js",
    output:{
        filename: "main.js",
        path : path.resolve(__dirname,"dist")
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                //order needed css loader inject css in js and style loader loaded in dom
                use :["style-loader","css-loader"]
            }
        ]
    }
};
