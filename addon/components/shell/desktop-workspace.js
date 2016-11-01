import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-workspace';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';

export default Ember.Component.extend(UiSizeableMixin, UiPositionableMixin, {
  layout,
  workspace: null,
  classNames: ['esh-desktop-workspace'],

  manager: Ember.inject.service('shell-manager'),
  apps: Ember.computed.alias('manager.running')

});
