import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-area';

export default Ember.Component.extend({
  layout,
  classNames: ['esh-desktop-area'],
  manager: Ember.inject.service('shell-manager')
});
