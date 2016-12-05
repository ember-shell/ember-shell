import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/window/app-container';

export default Ember.Component.extend({
  layout,
  tagName: 'window-app-container',
  classNames: ['flex-box', 'flex-one']
});
