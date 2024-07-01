const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports ={

    mode : "development",
    entry : "./src/index.js",
    output:{
        //browser cashed the same file name so if we change in the code the brower still gives old reslt
        //we burst the cash here we change file name every time and mail.hashvalue.js
        filename: "main.[contentHash].js",
        path : path.resolve(__dirname,"dist")
    },
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
