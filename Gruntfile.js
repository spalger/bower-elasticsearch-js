/* jshint node:true */
'use strict';

/*************************************************************
**************************************************************
* Must be run as a submodule of elasticsearch-js
**************************************************************
**************************************************************/

module.exports = function (grunt) {
  var esjsPkg = require('../../package.json');
  // load plugins
  grunt.initConfig({
    copy: {
      esjsDist: {
        cwd: '../../dist/',
        src: 'elasticsearch*.js',
        expand: true,
        dest: __dirname,
      }
    },
    release: {
      options: {
        file: 'bower.json',

        // save changes
        tag: true,
        pushTags: true,
        tagName: 'v' + esjsPkg.version,
        commitMessage: 'version ' + esjsPkg.version,
        tagMessage: 'version ' + esjsPkg.version,

        add: false,
        commit: false,
        push: false,
        bump: false,
        npm: false,
        npmtag: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-contrib-copy');
};