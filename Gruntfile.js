module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-concurrent');

	var configs = require('load-grunt-configs')(grunt);
	grunt.initConfig(configs);

	grunt.registerTask('debug',["sass:dist","concurrent:debug"]);
	grunt.registerTask('dist', ["sass:dist", "copy:dist"]);
	grunt.registerTask('default', ['debug']);
}
