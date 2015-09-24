module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    copy: {

      main: {
          files: [
            {
              expand: true,
              cwd: 'src/',
              src: ['**'],
              dest: 'dist/'
            }
          ]
      }
    },

    uglify: {
      build: {
        src: 'src/angular-modularizer.js',
        dest: 'dist/angular-modularizer.min.js'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy']);
};