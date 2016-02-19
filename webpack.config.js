var path = require('path');

module.exports = {
	entry: {
		app: './index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		noParse: [
			path.join(__dirname, 'modules', 'Global', 'Global')
		],
		loaders: [
			{ test: /SharedUtilities\/*/, loader: "bundle-loader" }
		]
	}
};