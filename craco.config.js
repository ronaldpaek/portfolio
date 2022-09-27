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
			'@themes': path.join(
				path.resolve(__dirname, './src/themes/AppThemeProvider')
			),
			'@hoc': path.join(path.resolve(__dirname, './src/hoc')),
			'@styles': path.join(path.resolve(__dirname, './src/styles')),
			'@pages': path.join(path.resolve(__dirname, './src/pages')),
			'@utils': path.join(path.resolve(__dirname, './src/utils/fetchData')),
			'@header': path.join(
				path.resolve(__dirname, './src/components/Header/index')
			)
		}
	}
};
