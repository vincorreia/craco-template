const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@constants': path.resolve(__dirname, 'src/constants.ts')
		}
	}
}
