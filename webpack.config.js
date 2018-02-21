const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const jsBoxConfig = require('./jsbox.config.json')
const entry = {};

jsBoxConfig.script.forEach(script => {
  entry[script.name] = script.src;
});

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    // new UglifyJsPlugin()
  ],
  watch: true,
  devtool: 'inline-source-map',
};