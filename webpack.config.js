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
                test: /\.scss$/,
                //order needed css loader inject css in js and style loader loaded in dom
                use :[
                    "style-loader", //3    inject styleinto dom  
                    "css-loader",  //2 turns css into common js
                    "sass-loader"  //1 turn sass into css
                ]
            }
        ]
    }
};
