const path = require('path');

module.exports = {
	entry: __dirname + '/client/src/index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public/dist'
	},
	resolve: {
		alias: {
			'@lino': path.resolve(__dirname, './client/src')
		}
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
		]
	}
};
