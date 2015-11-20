module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        eslint: {
            all: [
                'app/**/*.js',
                'tests/app/**/*.js',
                'tests/runner.js',
                'Gruntfile.js',
                '!app/bestPractices.js'
            ]
        },
        watch: {
            scripts: {
                files: ['app/**/*.js', 'tests/app/**/*.js'],
                tasks: ['eslint'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: {
                        path: __dirname,
                        options: {
                            index: 'tests/runner.html',
                            keepalive: true
                        }
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['eslint']);
    grunt.registerTask('develop', ['connect', 'watch']);
};
