var path = require('path');

const bundleLoaderPaths = [
	'sharedUtilities',
	'modules/contacts/shared/',
	'globals'
];

const scriptLoaderPaths = [
	'globals'
];

module.exports = {
	entry: {
		app: './index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: 'dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ include: bundleLoaderPaths.map(p => path.resolve(__dirname, p)), loader: "bundle-loader" },
			{ include: scriptLoaderPaths.map(p => path.resolve(__dirname, p)), loader: "script-loader" },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};