/* jshint node: true */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const existsSync = require('exists-sync');
const mergeTrees = require('ember-cli/lib/broccoli/merge-trees');
const broccoliPostcss = require('broccoli-postcss');
const { preprocessTemplates} = require('ember-cli-preprocess-registry/preprocessors');
const { WatchedDir } = require('broccoli-source');

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

  isDevelopingAddon(){
    return true;
  },

  /*included: function (app) {
    this._super.included.apply(this, arguments);
  },*/

  /**
   * Adds all the package's app tree files to the main App Tree
   */
  treeForApp() {
    const tree = this._super.treeForApp.apply(this, arguments);

    const packages = require(this.packagesPath + '/index.js');
    const addonApp = [];

    packages.forEach( pkg => {
      const pkgApp = path.join(this.packagesPath, pkg.name, 'app');
      if (!existsSync(pkgApp)) {
        return;
      }
      addonApp.push(new WatchedDir(pkgApp));
    });

    const addonAppTree = mergeTrees(addonApp, { overwrite: true });
    const excludedAppTree = new Funnel(addonAppTree, {
      exclude: ['*.gitkeep']
    });

    return tree ? mergeTrees([tree, excludedAppTree]) : excludedAppTree;
  },

  /**
   * Adds all the files and templates related to the addon into
   * the correspondent tree.
   */
  treeForAddon() {
    this._requireBuildPackages();

    const packages = require(this.packagesPath + '/index.js');

    const addonJS = [];
    const addonHbs = [];

    packages.forEach(pkg => {
      const pkgLib = path.join(this.packagesPath, pkg.name, 'lib');
      const pkgTemplates = path.join(pkgLib, 'templates');

      if (!existsSync(pkgLib)) {
        return;
      }

      addonJS.push(new WatchedDir(pkgLib));

      if(pkg.hasTemplates){
        addonHbs.push(new Funnel(pkgTemplates, {
          include: [
            '*.hbs',
            '**/*.hbs'
          ],
          exclude: ['*.gitkeep'],
          srcDir: '/',
          destDir: 'modules/ember-shell/templates/'+ pkg.module
        }));
      }
    });

    const addonJsTree = mergeTrees(addonJS, { overwrite: true });

    const excludedJsTree = new Funnel(addonJsTree, {
      exclude: ['*.gitkeep']
    });

    const finalAddonJsTree = this.processedAddonJsFiles(excludedJsTree);
    const addonHbsTree = this.compileTemplates(mergeTrees(addonHbs));

    const emberShellTrees = mergeTrees([addonHbsTree, finalAddonJsTree]);
    const stylesTree = this.compileStyles(this._treeFor('addon-styles'));

    return mergeTrees([emberShellTrees, stylesTree], {
      annotation: `Addon#treeForAddon(${this.name})`
    });
  },

  /**
   * Original function was overwritten due to a hard-coded path for addon's templates
   * on_treeFor that won't let me customize where to find them
   * (https://github.com/ember-cli/ember-cli/blob/master/lib/models/addon.js#L660)
   */
  compileTemplates(tree) {
    this._requireBuildPackages();
    return preprocessTemplates(tree, {
      annotation: 'compileTemplates(ember-shell)',
      registry: this.registry
    });
  },

  /**
   * Original function was overwritten (same reason as above)
   */
  shouldCompileTemplates() {
    return true;
  },

  /**
   * Support for shell-theme public tree
   */
  treeForPublic(tree) {
    const themesPath = path.join(this.packagesPath, 'shell-themes');
    const shellThemeTree = new Funnel(themesPath, {
      destDir: 'themes',
      exclude: ['.gitkeep'],
    });

    return tree ? mergeTrees([tree, shellThemeTree]) : shellThemeTree;
  },

  /**
   * Prepares the custom styles path tree with postcss
   */
  treeForAddonStyles() {
    const stylesPath = path.join(this.packagesPath, 'shell-styles');
    const inputTree = new Funnel(stylesPath, {
      files: ['ember-shell.css'],
      srcDir: '/',
      destDir: 'ember-shell',

      getDestinationPath: function() {
        return 'shell-styles.css';
      }
    });

    const options = {
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

  /**
   * Checks if current instance is meant for an addon or an application
   */
  isAddon() {
    const keywords = this.project.pkg.keywords;
    return (keywords && keywords.indexOf('ember-addon') !== -1);
  }

};
