import Ember from 'ember';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';
import layout from '../../templates/components/shell/desktop-panel';

export default Ember.Component.extend(UiPositionableMixin, UiSizeableMixin, {
  layout,
  classNames: ['esh-desktop-panel']
});
