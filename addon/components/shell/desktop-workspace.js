import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-workspace';

export default Ember.Component.extend({
  layout,
  workspace: null,
  tagName: 'shell-workspace',

  manager: Ember.inject.service('shell-manager'),
  apps: Ember.computed.alias('manager.apps'),
});
