import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/window/title-bar';
import focusableMixin from 'ember-shell/mixins/behaviour/focusable';

export default Ember.Component.extend(focusableMixin, {
  layout,
  tagName: 'window-title-bar',
  classNames: ['flex-box', 'flex-center-center']
});
