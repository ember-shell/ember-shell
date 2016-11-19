import Ember from 'ember';
import layout from '../../../templates/components/shell/panel/main-menu';

export default Ember.Component.extend({
  layout,
  classNames: ['esh-panel-main-menu'],
  manager: Ember.inject.service('shell-manager'),

  actions: {
    
  }

});
