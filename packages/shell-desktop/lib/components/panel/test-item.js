import Ember from 'ember';
import PanelItemMixin from 'ember-shell/mixins/element/panel-item';

export default Ember.Component.extend(PanelItemMixin, {
  layout,
  classNames: ['esh-panel-test-item'],
  allowMultiple: false
});
