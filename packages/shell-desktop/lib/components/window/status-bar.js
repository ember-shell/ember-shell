import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/window/title-bar';

const StatusBarComponent = Ember.Component.extend({
  layout,
  tagName: 'status-bar',
  classNames: ['flex-box', 'flex-center-center']
});

StatusBarComponent.reopenClass({
  positionalParams: ['application']
});

export default StatusBarComponent;