import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/panel/menu-button';
import PanelItemMixin from 'ember-shell/mixins/element/panel-item';

export default Ember.Component.extend(PanelItemMixin, {
  layout,
  classNames: ['esh-panel-menu-button'],
});
