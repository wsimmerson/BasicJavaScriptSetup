module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mochaTest : {
            test : {
                options : {
                    reporter : 'spec',
                    clearRequireCache : true
                },
                src : ['tests/**/*.spec.js']
            }
        },

        jshint : {
            files : ['gruntfile.js', '*.js', 'tests/*.spec.js']
        },

        watch : {
            js : {
                options : {
                    spawn: true,
                    interrupt: true,
                    debounceDelay: 250,
                },
                files : ['gruntfile.js', '*.js', 'tests/*.spec.js'],
                tasks : ['jshint', 'mochaTest']
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'mochaTest']);

};
