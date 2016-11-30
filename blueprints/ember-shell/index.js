/*jshint node:true*/
module.exports = {
  description: 'Installs ember-shell common dependencies',

  normalizeEntityName: function () {},

  afterInstall: function() {
    return Promise.all([
      this.addPackagesToProject([
        { name: 'broccoli-funnel', target: '^1.0.9' },
        { name: 'broccoli-merge-trees',target: '^1.1.5' },
        { name: 'broccoli-postcss', target: '^3.1.0' },
        { name: 'postcss-import', target: '^8.2.0' },
        { name: 'postcss-cssnext', target: '^2.8.0' },
        { name: 'cssnano', target: '^3.8.0' },
        { name: 'ember-run-raf', target: 'git+https://github.com/runspired/ember-run-raf.git#4e9fa2859dd9eb2129ad6d72fac37ab65a4fc0cd' },
        { name: 'ember-variable-styles', target: '^0.0.3' }
      ]),
      /*this.addBowerPackagesToProject([
        { name: 'animation-frame', target: '^0.2.4' }
      ])*/
    ]);
  }
};
