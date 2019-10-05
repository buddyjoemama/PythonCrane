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

    grunt.registerTask('default', ['uglify:default']);  
  };