const path = require("path");
 const common = require("./webpack.common");
 const { merge } = require('webpack-merge');

module.exports = merge(common,{

    mode : "development",
    output:{
        //browser cashed the same file name so if we change in the code the brower still gives old reslt
        //we burst the cash here we change file name every time and mail.hashvalue.js
        filename: "main.js",
        path : path.resolve(__dirname,"dist")
    }
 
    
});
