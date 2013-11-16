var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
     dev: ['Gruntfile.js', 'api.js', 'app/**/*.js']
    },
    concat: {
      dev: {
        src: ['app/**/*.js'],
        dest: 'public/js/app.js'
      }
    },
    uglify: {
      dev: {
        files: {
          'public/js/app.js': ['app/**/*.js']
        }
      }
    },
    express: {
      livereload: {
        options: {
          port: 9000,
          server: path.resolve('./api'),
          bases: path.resolve('public')
        }
      }
    },
    watch: {
      dev: {
        files: ['app/**/*.js', 'api.js', 'Gruntfile.js'],
        tasks: ['jshint', 'concat'/*, 'uglify'*/]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-express');
  
  grunt.registerTask('server', ['express', 'watch', 'express-keepalive']);
};