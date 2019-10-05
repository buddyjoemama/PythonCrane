module.exports = function(grunt) {

    var config = {
        libs: ['node_modules/angular/angular.min.js',
                'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js'],
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
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['uglify:default']);  
  };