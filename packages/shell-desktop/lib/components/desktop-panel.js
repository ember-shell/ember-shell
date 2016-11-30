import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/desktop-panel';
import { PanelElement } from 'ember-shell/ui';

export default Ember.Component.extend(PanelElement, {
  layout,
  tagName: 'shell-panel',
  manager: Ember.inject.service('shell-manager')
});
