module.exports = function(grunt) {

    var config = {
        libs: ['node_modules/angular/angular.min.js',
                'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
                'node_modules/angular-route/angular-route.js'],
        app: ['templates/js/templates.js', 'src/**/*.js']
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
                src: 'templates/**/*.*',
                dest: '/home/pi/www/',
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
                tasks: ['html2js:main', 'uglify:default', 'copy:default']
            },
            mac: {
                files: ['<%=config.app%>', 'templates/**/*.html'],
                tasks: ['html2js:main', 'uglify:mac', 'copy:html-mac']
            },
            windows: {
                files: ['<%=config.app%>', 'templates/**/*.html'],
                tasks: ['html2js:main', 'uglify:windows', 'copy:html-windows']
            }
        },

        html2js: {
            options: {
                base: '',
                process: function (content, path) {
                    var first = content.indexOf("<content>");
                    var last = content.indexOf("</content>");

                    if (first === null || first === -1)
                        return content;

                    return content.substring(first + "<content>".length, last);
                }
            },
            main: { 
                src: ['templates/**/*.html'],
                dest: 'templates/js/templates.js'
            }
        },
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('default', ['html2js:main', 'uglify:default', 'copy:default']);  
    grunt.registerTask('windows', ['html2js:main', 'uglify:windows', 'copy:html-windows']);
    grunt.registerTask('mac', ['html2js:main', 'uglify:mac', 'copy:html-mac']);
  };