import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-panel';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';

export default Ember.Component.extend(UiSizeableMixin, UiPositionableMixin, {
  layout,
  classNames: ['esh-desktop-panel'],
});
