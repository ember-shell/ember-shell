import Ember from 'ember';
import layout from 'ember-shell/templates/app/app-main';

export default Ember.Component.extend({
  layout,

  tagName: ['app-main'],
  classNames: ['flex-box', 'flex-one']
});
