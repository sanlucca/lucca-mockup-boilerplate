'use strict';

module.exports = function(grunt, options){
	return {
		options: {
			spawn: false
		},

		sass: {
			files: ['scss/**/*.scss', 'scss/*.scss'],
			tasks: ['sass']
		}
	};
};
