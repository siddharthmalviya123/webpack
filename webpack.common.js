const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={

    entry : "./src/index.js",

    plugins :[new HtmlWebpackPlugin(
        {
        template: "./src/template.html"
})],
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
