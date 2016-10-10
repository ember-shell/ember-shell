import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-area';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';

export default Ember.Component.extend(UiSizeableMixin, UiPositionableMixin, {
  layout,
  workspaces: Ember.inject.service('shell-workspaces'),
  classNames: ['esh-desktop-area'],
});
