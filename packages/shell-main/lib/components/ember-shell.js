/**
 * @module ember-shell
 * @submodule shell-manager
 */

import Ember from 'ember';
import layout from 'ember-shell/templates/main/ember-shell';

export default Ember.Component.extend({
  layout,
  tagName: 'shell-desktop',
  manager: Ember.inject.service('shell-manager')
});
