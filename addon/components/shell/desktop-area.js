import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-area';

export default Ember.Component.extend({
  layout,
  classNames: ['esh-desktop-area'],
  tagName: 'screen',
  manager: Ember.inject.service('shell-manager')
});
