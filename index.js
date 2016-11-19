/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var broccoliPostcss = require('broccoli-postcss');

module.exports = {
  name: 'ember-shell',

  included: function (app) {
    this._super.included.apply(this, arguments);
    
    app.import('vendor/ember-shell.css');
  },

  treeForVendor: function (node) {
    var stylesPath = this.isAddon() ? 
        path.join(this.project.root, 'addon' ,'-styles') :
        path.join(this.project.nodeModulesPath, this.name, 'addon' ,'-styles');

    var inputTree = new Funnel(stylesPath, { files: ['ember-shell.css'] });

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

    var postCssTree = broccoliPostcss(inputTree, options);

    debugger;

    return node ? mergeTrees([ node, postCssTree ]) : postCssTree;
  },

  isAddon: function () {
    var keywords = this.project.pkg.keywords;
    return (keywords && keywords.indexOf('ember-addon') !== -1);
  }

};
