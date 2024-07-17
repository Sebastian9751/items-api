module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['standard', 'plugin:prettier/recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		requireConfigFile: false,
		babelOptions: {
			presets: ['@babel/preset-env'],
		},
	},
	rules: {
		'prettier/prettier': 'off',
	},
};
