/*jshint node:true*/
module.exports = {
  description: 'Installs ember-shell common dependencies',

  normalizeEntityName: function () {},

  beforeInstall: function() {
    return Promise.all([

      this.addPackagesToProject([
        { name: 'broccoli-funnel', target: '^1.0.9' },
        { name: 'broccoli-merge-trees',target: '^1.1.5' },
        { name: 'broccoli-postcss', target: '^3.1.0' },
        { name: 'postcss-import', target: '^8.2.0' },
        { name: 'postcss-cssnext', target: '^2.8.0' },
        { name: 'cssnano', target: '^3.8.0' }
      ]),

      this.addAddonsToProject({
        packages: [
          { name: 'ember-engines', target: '0.5.0-beta.2' },
          { name: 'ember-network', target: '0.3.1' },
          { name: 'ember-run-raf', target: '~1.1.2' },
          { name: 'ember-variable-styles', target: '^0.0.3' },
          { name: 'esh-task-manager', target: '^0.4.1-alpha' },
          { name: 'esh-test-app', target: '^0.4.1-alpha' }
        ]
      }),

      this.removePackagesFromProject([
        { name: 'ember-welcome-page' }
      ])

    ]);
  }
};
