var path = require('path');

const bundleLoaderPaths = [
	'SharedUtilities',
	'modules/Contacts/shared/',
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
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ include: bundleLoaderPaths.map(p => path.resolve(__dirname, p)), loader: "bundle-loader" },
			{ include: scriptLoaderPaths.map(p => path.resolve(__dirname, p)), loader: "script-loader" }
		]
	}
};