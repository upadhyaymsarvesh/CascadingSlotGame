const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist'
  },
  devtool: 'source-map',
});
