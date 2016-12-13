import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/window/title-bar';

const TitleBarComponent = Ember.Component.extend({
  layout,
  tagName: 'title-bar',
  classNames: ['flex-box', 'flex-center-center']
});

TitleBarComponent.reopenClass({
  positionalParams: ['application']
});

export default TitleBarComponent;
