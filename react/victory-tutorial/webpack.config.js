var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'client.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
      ]
  }
};