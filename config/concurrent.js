'use strict';

module.exports = function(grunt, options) {
	return {
		options: {
			logConcurrentOutput: true
		},
		debug: ['watch:sass', 'browserSync:dev']
	};
};
