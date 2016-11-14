import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-panel';
import ElementPanelMixin from 'ember-shell/mixins/element/panel';

export default Ember.Component.extend(ElementPanelMixin, {
  layout,
  classNames: ['esh-desktop-panel'],
});
