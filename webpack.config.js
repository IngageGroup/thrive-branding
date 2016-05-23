

module.exports = {
  name: 'ThriveIntranet',
  entry: 'index.js',
  output: {
    filename: '[name].js',
    path: './dist',
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: [
          './src'
        ],
        loader: 'babel?presets[]=es2015',
      }
    ],
  },
};
