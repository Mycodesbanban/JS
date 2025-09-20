const webpack = require("webpack") // importa o webpack
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 

module.exports = {
    mode:"development",
    entry:"./src/principal.js",
    output:{
        filename:"principal.js",
        path: __dirname+ "/public"
    } , 
    plugins:[
        new MiniCssExtractPlugin ({ // quando o encontrar arquivos .css, em vez de injetar o CSS direto no HTML, extraia esse CSS para um arquivo separado chamado estilo.css
            filename:"estilo.css"
        })
    ],
    module:{ 
        rules:[{  
            test:/\.s?[ac]ss$/,  
            use:[  
                MiniCssExtractPlugin.loader,  //pega esse CSS processado e salva como arquivo .css separado
                "css-loader", //interpreta @import , url()...
                "sass-loader"
            ]
        }]
    }
}