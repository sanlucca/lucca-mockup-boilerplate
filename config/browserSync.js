'use strict';

module.exports = function(grunt, options) {
	return {
			dev: {
				bsFiles: {
					src: ['styles/styles.css', '*.html', 'includes/*.html', 'js/*.js']
				},
				options: {
					server: {
						baseDir: './',
						index: "index.html"
					}
				}
			}
	}
};
