import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/desktop-window';
import WindowElement from 'ember-shell/mixins/element/window';

export default Ember.Component.extend(WindowElement, {
  layout,

  attributeBindings: ['appId:data-app-id'],
  appId: Ember.computed.readOnly('app.elementId'),

  init(){
    this._super(...arguments);

    this.app.window = this;

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 450 },
      { declaration: 'sizeable', property: 'size.height', value: 300 },
      { declaration: 'positionable', property: 'position.x', value: 50 },
      { declaration: 'positionable', property: 'position.y', value: 80 }
    ]);
  }

});
