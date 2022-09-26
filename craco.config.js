const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@': path.join(path.resolve(__dirname, './src')),
			'@client': path.join(path.resolve(__dirname, './src/client')),
			'@assets': path.join(path.resolve(__dirname, './src/assets')),
			'@components': path.join(path.resolve(__dirname, './src/components')),
			'@contexts': path.join(path.resolve(__dirname, './src/contexts')),
			'@constants': path.join(path.resolve(__dirname, './src/constants')),
			'@themes': path.join(path.resolve(__dirname, './src/themes')),
			'@hoc': path.join(path.resolve(__dirname, './src/hoc')),
			'@styles': path.join(path.resolve(__dirname, './src/styles')),
			'@utils': path.join(path.resolve(__dirname, './src/utils/fetchData'))
		}
	}
};
