/* jshint node: true */
'use strict';

/**
 * Ember-shell packages definition
 *
 * @module ember-shell
 * @type {Object[]} Package object definition
 */
module.exports = [
  { name: 'shell-main', module: 'main' },
  { name: 'shell-app', module: 'app' },
  { name: 'shell-bus', module: 'bus' },
  { name: 'shell-debug', module: 'debug' },
  { name: 'shell-desktop', module: 'desktop' },
  { name: 'shell-registry', module: 'registry' },
  { name: 'shell-security', module: 'security' },
  { name: 'shell-store', module: 'store' },
  { name: 'shell-ui', module: 'ui' }
];