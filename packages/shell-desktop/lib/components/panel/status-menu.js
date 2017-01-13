import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/panel/status-menu';
import PanelItemMixin from 'ember-shell/mixins/element/panel-item';

export default Ember.Component.extend(PanelItemMixin, {
  layout,
  classNames: ['esh-panel-status-menu'],
});
