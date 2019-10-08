module.exports = function(grunt) {

    var config = {
        libs: ['node_modules/angular/angular.min.js',
                'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
                'node_modules/angular-route/angular-route.js'],
        app: ['src/**/*.js']
    };

    var outFiles = {
        'templates/js/crane.libs.js': ['<%=config.libs%>'],
        'templates/js/crane.app.js': ['<%=config.app%>']
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
            },
            windows: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: outFiles
            },
            mac: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: outFiles
            }
        },

        copy: {
            default: {
                src: 'templates/*',
                dest: '/home/pi/www/',
                flatten: true,
                expand: true
            },
            'html-mac': {
                src: 'templates/*',
                dest: '/Users/bbacon/www/',
                flatten: true,
                expand: true
            },
            'html-windows': {
                src: 'templates/**/*.*',
                dest: '/mnt/c/inetpub/wwwroot/',
                expand: true
            }
        },

        watch: {
            default: {
                files: ['<%=config.app%>', 'templates/**/*.html'],
                tasks: ['uglify:default', 'copy:default']
            },
            mac: {
                files: ['<%=config.app%>', 'templates/**/*.html'],
                tasks: ['uglify:mac', 'copy:html-mac']
            },
            windows: {
                files: ['<%=config.app%>', 'templates/**/*.html'],
                tasks: ['uglify:windows', 'copy:html-windows']
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify:default', 'copy:default']);  
    grunt.registerTask('windows', ['uglify:windows', 'copy:html-windows']);
    grunt.registerTask('mac', ['uglify:mac', 'copy:html-mac']);
  };