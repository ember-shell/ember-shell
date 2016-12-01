import Ember from 'ember';
import layout from 'ember-shell/templates/debug/debug-toolbar';

export default Ember.Component.extend({
  layout,
  tagName: 'debug-toolbar',
  manager: Ember.inject.service('shell-manager'),

  actions: {
    startApp(appName){
      this.get('manager').exec(appName);
      return false;
    }

  }
});
