module.exports = {
  entry: __dirname + '/client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // }
    ]
  }
};
