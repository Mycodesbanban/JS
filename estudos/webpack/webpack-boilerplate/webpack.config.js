const path = require('path'); // importando para trabalhar com caminhos

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ // regras 
      exclude: /node_modules/, //exluir 
      test: /\.js$/, // teste
      use: { // usar
        loader: 'babel-loader', 
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map'
};
