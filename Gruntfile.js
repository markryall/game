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
    },
    bower: {
      install: {
        options: {
          copy: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', ['bower', 'jasmine']);
};
