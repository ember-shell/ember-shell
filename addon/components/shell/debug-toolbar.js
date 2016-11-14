import Ember from 'ember';
import layout from '../../templates/components/shell/debug-toolbar';

export default Ember.Component.extend({
  layout,
  classNames: ['esh-debug-toolbar'],
  manager: Ember.inject.service('shell-manager'),

  actions: {
    startApp(appName){
      this.get('manager').exec(appName);
      return false;
    }

  }
});
