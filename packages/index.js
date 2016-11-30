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
      'ember',
      'ember-shell/templates/debug/debug-toolbar'
    ],
    hasTemplates: true
  },
  {
    name: 'shell-desktop',
    module: 'desktop',
    externals: [
      'ember',
      'ember-shell/ui',
      'ember-variable-styles/mixins/styleable',
      'ember-shell/templates/desktop/desktop-panel',
      'ember-shell/templates/desktop/desktop-window',
      'ember-shell/templates/desktop/desktop-workspace',
      'ember-shell/templates/desktop/panel/main-menu',
      'ember-shell/templates/desktop/window/app-container',
      'ember-shell/templates/desktop/window/status-bar',
      'ember-shell/templates/desktop/window/title-bar'
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
      'ember',
      'ember-shell/ui',
      'ember-variable-styles/mixins/styleable',
      'ember-shell/templates/ui/ui-background',
      'ember-shell/templates/ui/ui-button',
      'ember-shell/templates/ui/ui-icon',
      'ember-shell/templates/ui/ui-label',
      'ember-shell/templates/ui/ui-menu'
    ],
    hasTemplates: true
  }
];