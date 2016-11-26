/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var Rollup = require('broccoli-rollup');
var mergeTrees = require('broccoli-merge-trees');
var broccoliPostcss = require('broccoli-postcss');

module.exports = {
  name: 'ember-shell',

  init(){
    this._super(...arguments);
    this.packagesPath = this.isAddon() ? 
        path.join(this.project.root, 'packages') :
        path.join(this.project.nodeModulesPath, this.name, 'packages');

    this.treeForMethods['addon-styles'] = 'treeForAddonStyles';
    this.treeForMethods['addon-templates'] = 'treeForAddonTemplates';
  },

  isDevelopingAddon: function(){
    return true;
  },

  included: function (app) {
    this._super.included.apply(this, arguments);

    /*var packages = require(path.join(this.project.root, 'packages') + '/index.js');
    var vendorPath = path.join(this.project.root, 'vendor');

    packages.forEach(function(pkg) {
      app.import(vendorPath + '/' + pkg.name + '.js');
    });*/
  },

  _getPackagesTrees: function() {
    var packages = require(path.join(this.project.root, 'packages') + '/index.js');
    var rootPath = this.project.root;

    return packages.map(function(pkg){
      var dir = path.join(rootPath, 'packages', pkg.name, 'lib');
      return new Rollup(dir, {
        rollup: {
          entry: 'index.js',
          dest: pkg.module + '.js',
          format: 'amd',
          moduleId: pkg.name
        },
        annotation: pkg.module
      });
    });
  },

  treeForAddon: function() {
    this._requireBuildPackages();

    var packagesTrees = mergeTrees(this._getPackagesTrees());

    var addonTree = this.compileAddon(packagesTrees);
    var stylesTree = this.compileStyles(this._treeFor('addon-styles'));
    var templatesTree = this.treeForAddonTemplates();

    return mergeTrees([addonTree, stylesTree, templatesTree].filter(Boolean), {
      annotation: 'Addon#treeForAddon(' + this.name + ')'
    });
  },

  emptyFunnelTree: function(node){
    return new Funnel();
  },

  treeForTemplates: this.emptyFunnelTree,

  treeForAddonTemplates: function() {
    return new Funnel(this.packagesPath, { include: [
      '**/lib/templates/*.hbs',
      '**/lib/templates/**/*.hbs'
    ]});
  },

  treeForAddonStyles: function () {
    var stylesPath = this.isAddon() ? 
        path.join(this.project.root, 'packages', 'shell-styles') :
        path.join(this.project.nodeModulesPath, this.name, 'packages', 'shell-styles');

    var inputTree = new Funnel(stylesPath, { 
      files: ['ember-shell.css'],
      destDir: 'shell-styles'
    });

    var options = {
      plugins: [
        { module: require('postcss-import'), options: { 
            path: stylesPath, 
            plugins: []
        }},
        { module: require('postcss-cssnext'), options: { 
          features: {
            customProperties: false
          }
        }},
        { module: require('cssnano'), options: {
            autoprefixer: false
        }}
      ],
      map:{ inline: true }
    }

    return broccoliPostcss(inputTree, options);
  },

  isAddon: function () {
    var keywords = this.project.pkg.keywords;
    return (keywords && keywords.indexOf('ember-addon') !== -1);
  }

};
