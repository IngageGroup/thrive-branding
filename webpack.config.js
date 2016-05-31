var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
		ThriveBranding: './index.js',
	},
  output: {
    filename: '[name].js',
    path: './dist',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          './src'
        ],
        loader: 'babel?presets[]=es2015',
      },
      {
        test: /\.(c|le)ss$/,
        exclude: [
          './node_modules',
        ],
        loader: ExtractTextPlugin.extract('css-loader!less-loader'),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
};
