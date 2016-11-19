import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-area';

export default Ember.Component.extend({
  layout,
  tagName: 'shell-desktop',
  manager: Ember.inject.service('shell-manager')
});
