module.exports = function(grunt) {

    var config = {
        libs: ['node_modules/angular/angular.min.js',
                'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
                'node_modules/angular-route/angular-route.js'],
        app: ['src/**/*.js']
    };

    var outFiles = {
        windows: {
            '/mnt/c/inetpub/wwwroot/js/crane.libs.js': ['<%=config.libs%>'],
            '/mnt/c/inetpub/wwwroot/js/crane.app.js': ['<%=config.app%>']
        },
        raspi: {
            '/home/pi/www/js/crane.libs.js': ['<%=config.libs%>'],
            '/home/pi/www/js/crane.app.js': ['<%=config.app%>']
        },
        mac: {
            '/Users/bbacon/www/js/crane.libs.js': ['<%=config.libs%>'],
            '/Users/bbacon/www/js/crane.app.js': ['<%=config.app%>']
        }
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
                files: outFiles.raspi
            },
            windows: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: outFiles.windows
            },
            mac: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: outFiles.mac
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
                src: 'templates/*',
                dest: '/mnt/c/inetpub/wwwroot',
                flatten: true,
                expand: true
            }
        },

        watch: {
            default: {
                files: ['<%=config.app%>'],
                tasks: ['uglify:default']
            },
            mac: {
                files: ['<%=config.app%>'],
                tasks: ['uglify:mac', 'copy:html-mac']
            },
            windows: {
                files: ['<%=config.app%>'],
                tasks: ['uglify:windows', 'copy:html-windows']
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify:default', 'copy:html-default']);  
    grunt.registerTask('windows', ['uglify:windows', 'copy:html-windows']);
    grunt.registerTask('mac', ['uglify:mac', 'copy:html-mac']);
  };