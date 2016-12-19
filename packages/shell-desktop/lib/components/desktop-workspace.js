import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/desktop-workspace';

export default Ember.Component.extend({
  layout,
  workspace: null,
  tagName: 'shell-workspace',

  manager: Ember.inject.service('shell-manager'),
  apps: Ember.computed.alias('manager.apps')

});
