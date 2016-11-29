import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/desktop-panel';
import ElementPanelMixin from 'ember-shell/mixins/element/panel';

export default Ember.Component.extend(ElementPanelMixin, {
  layout,
  tagName: 'shell-panel',
  manager: Ember.inject.service('shell-manager')
});
