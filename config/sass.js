'use strict';

module.exports = function(grunt, options) {
	return {
		options: {
			includePaths: [
				'scss/theming',
				'node_modules/@lucca-front/scss/src/overrides',
			],
			outputStyle: 'compressed',
			sourceMap: true
		},
		dist: {
			files: [
				{
				'styles/styles.css':'scss/main.scss'
				}
			]
		}
	};
};
