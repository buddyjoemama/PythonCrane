module.exports = function(grunt) {

    var config = {
        libs: ['node_modules/angular/angular.min.js',
                'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
                'node_modules/angular-route/angular-route.js'],
        app: ['src/**/*.js']
    };

    var outFiles = {
        '/Users/bbacon/www/js/crane.libs.js': ['<%=config.libs%>'],
        '/Users/bbacon/www/js/crane.app.js': ['<%=config.app%>']
    };

    grunt.initConfig({
        config: config,

        uglify: {
            default: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: outFiles
            }
        },

        copy: {
            html: {
                src: 'templates/*',
                dest: '/Users/bbacon/www/',
                flatten: true,
                expand: true
            }
        },

        watch: {
            default: {
                files: ['<%=config.app%>'],
                tasks: ['uglify:default']
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify:default', 'copy:html']);  
  };