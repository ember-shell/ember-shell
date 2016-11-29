/* jshint node: true */
'use strict';

/**
 * Ember-shell packages definition
 *
 * @module ember-shell
 * @type {Object[]} Package object definition
 */
module.exports = [
  {
    name: 'shell-main',
    module: 'main',
    externals: [
      'ember',
      'ember-shell/app',
      'ember-shell/desktop',
      'ember-shell/templates/main/ember-shell'
    ],
    hasTemplates: true
  },
  {
    name: 'shell-app',
    module: 'app',
    externals: [
      'ember'
    ]
  },
  {
    name: 'shell-bus',
    module: 'bus',
    externals: [
      'ember'
    ]
  },
  {
    name: 'shell-debug',
    module: 'debug',
    externals: [
      'ember'
    ],
    hasTemplates: true
  },
  {
    name: 'shell-desktop',
    module: 'desktop',
    externals: [
      'ember',
      'ember-shell/templates/desktop/desktop-panel'
    ],
    hasTemplates: true
  },
  {
    name: 'shell-registry',
    module: 'registry',
    externals: [
      'ember'
    ]
  },
  {
    name: 'shell-security',
    module: 'security',
    externals: [
      'ember'
    ]
  },
  {
    name: 'shell-store',
    module: 'store',
    externals: [
      'ember'
    ]
  },
  {
    name: 'shell-ui',
    module: 'ui',
    externals: [
      'ember'
    ],
    hasTemplates: true
  }
];