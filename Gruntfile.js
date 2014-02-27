module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      main: {
	src: 'src/**/*.js',
	options: {
	  specs: 'spec/*Spec.js',
	  helpers: 'spec/*Helper.js'
	}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};
