/// <binding AfterBuild='default' />
module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            options: {
                folders: true
            },
            build: ["wwwroot/dist/**"]
        },
        bowercopy: {
            options: {
                runBower: true,
                destPrefix: 'wwwroot/lib'
            },
            libs: {
                files: {
                    'angular': 'angular',
                    'angular-route': 'angular-route',
                    'jquery': 'jquery',
                    'bootstrap': 'bootstrap/dist/css'
                }
            }
        },
        copy: {
            main: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: ['App/Scripts/*.js'],
                dest: 'wwwroot/dist/'
            }
        },
        concat: {
            //options: {
            //    separator: ';'
            //},
            dist: {
                src: ['wwwroot/dist/*.js'],
                dest: 'wwwroot/dist/appCombined.js'
            }
        },
        html2js: {
            options: {                
                module: 'virtualTrainingTemplates',
                htmlmin: {                    
                    collapseWhitespace: true,                    
                    removeComments: true,                    
                }
            },
            main: {
                src: ['App/Templates/*.html'],
                dest: 'wwwroot/dist/templates.js'
            }
        }
    });

    // This command registers the default task which will install bower packages into wwwroot/lib
    grunt.registerTask("default", ["clean:build", "bowercopy:libs", "html2js:main", "copy:main", "concat"]);

    // The following line loads the grunt plugins.
    // This line needs to be at the end of this  file.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-html2js");
};