import Ember from 'ember';
import WindowElement from 'ember-shell/mixins/element/workspace';
import layout from 'ember-shell/templates/desktop/desktop-workspace';

export default Ember.Component.extend(WindowElement, {
  layout,
  workspace: null,
  tagName: 'shell-workspace',
  classNameBindings: ['showAppBox:appbox-mode'],

  manager: Ember.inject.service('shell-manager'),
  apps: Ember.computed.alias('manager.apps')

});
