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
    hasTemplates: true
  },
  {
    name: 'shell-app',
    module: 'app',
    hasTemplates: true
  },
  {
    name: 'shell-bus',
    module: 'bus',
  },
  {
    name: 'shell-desktop',
    module: 'desktop',
    hasTemplates: true
  },
  {
    name: 'shell-registry',
    module: 'registry',
  },
  {
    name: 'shell-security',
    module: 'security',
  },
  {
    name: 'shell-store',
    module: 'store',
  },
  {
    name: 'shell-ui',
    module: 'ui',
    hasTemplates: true
  }
];