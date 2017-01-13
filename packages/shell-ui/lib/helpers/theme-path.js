import Ember from 'ember';

export default Ember.Helper.extend({
  manager: Ember.inject.service('shell-manager'),

  compute([path]) {
    const theme = this.get('manager.config.theme');
    return `/themes/${theme}/${path}`;
  }
});
