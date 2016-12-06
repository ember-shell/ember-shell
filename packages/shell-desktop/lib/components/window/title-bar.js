import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/window/title-bar';

export default Ember.Component.extend({
  layout,
  tagName: 'window-title-bar',
  classNames: ['flex-box', 'flex-center-center']
});
