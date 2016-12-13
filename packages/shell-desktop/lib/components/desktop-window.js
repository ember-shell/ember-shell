import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/desktop-window';
import WindowElement from 'ember-shell/mixins/element/window';

export default Ember.Component.extend(WindowElement, {
  layout,

  init(){
    this.app.window = this;
    this.tagName = this.app.name;

    this._super(...arguments);

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 450 },
      { declaration: 'sizeable', property: 'size.height', value: 300 },
      { declaration: 'positionable', property: 'position.x', value: 50 },
      { declaration: 'positionable', property: 'position.y', value: 80 }
    ]);
  },

  didInsertElement() {
    this._setupController();
    this._super(...arguments);
  },

  _setupController(){
    const applicationElement = this.element;
    const engine = this.app.engineInstance;
    const windowComponent = this;
    const application = this.app;

    let applicationController = engine.resolveRegistration('controller:application');
    engine.unregister('controller:application');

    applicationController = applicationController.reopen({
      applicationElement,
      application
    });

    engine.register('controller:application', applicationController);
  },

});
