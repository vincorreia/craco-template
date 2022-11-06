module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard-with-typescript',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json'
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	rules: {
		'no-unused-vars': 'warn'
	}
}
