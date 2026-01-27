const path=require('path');
module.exports={
    mode:"development",
    entry:"./src/main.js",
    output:{
        filename:"index.js",
        path:path.resolve("public")
    },
    module:{
        rules:[
                 {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },{
        test:/\.css?$/,
        use:['style-loader','css-loader'],
      }
        ]
    },
    devServer:{
        static:{
            directory:path.resolve("public")
        },
        port:8000
    }

}