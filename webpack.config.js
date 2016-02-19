var path = require('path');

const bundleLoaderPaths = [
	'SharedUtilities',
	'modules/Contacts/shared/'
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
		noParse: [
			path.join(__dirname, 'modules', 'Global', 'Global')
		],
		loaders: [
			{ include: bundleLoaderPaths.map(p => path.resolve(__dirname, p)), loader: "bundle-loader" }
		]
	}
};