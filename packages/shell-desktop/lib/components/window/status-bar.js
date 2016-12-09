import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/window/status-bar';
import focusableMixin from 'ember-shell/mixins/behaviour/focusable';

export default Ember.Component.extend(focusableMixin, {
  layout,
  tagName: 'window-status-bar',
  classNames: ['flex-box']
});
