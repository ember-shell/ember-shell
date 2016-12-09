import Ember from 'ember';
import layout from 'ember-shell/templates/app/app-container';
import focusableMixin from 'ember-shell/mixins/behaviour/focusable';

export default Ember.Component.extend(focusableMixin, {
  layout,
  classNames: ['flex-box', 'flex-one', 'esh-app-container'],

  init(){
    this.tagName = this.app.name;
    this._super(...arguments);
  }
});
