import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/panel/main-menu';

export default Ember.Component.extend({
  layout,
  classNames: ['esh-panel-main-menu'],
  manager: Ember.inject.service('shell-manager'),

  actions: {

  }

});
