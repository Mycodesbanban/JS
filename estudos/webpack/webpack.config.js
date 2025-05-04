const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode:"development",
    entry:"./src/principal.js",
    output:{
        filename:"principal.js",
        path: __dirname+ "/public"
    } , 
    Plugins:[
        new MiniCssExtractPlugin ({
            
        })
    ],
    module:{ // pesquisar 
        rules:[{ // rules são as regras 
            test:/\.css$/, // me explique isso 
            use:[ // me exlique isso 
                "style-loader" ,  // Adiciona CSS a dom injentando a tag </style>
                "css-loader", //interpreta @import , url()...
            ]
        }]
    }
}