import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/desktop-panel';
import PanelElement from 'ember-shell/mixins/element/panel';

export default Ember.Component.extend(PanelElement, {
  layout,
  tagName: 'shell-panel',

  init() {
    this._super(...arguments);

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 100 },
      { declaration: 'sizeable', property: 'size.height', value: 30 },
      { declaration: 'sizeable', property: 'size.widthUnit', value: '%' },
      { declaration: 'sizeable', property: 'size.heightUnit', value: 'px' },
      { declaration: 'positionable', property: 'position.x', value: 0 },
      { declaration: 'positionable', property: 'position.y', value: 0 }
    ]);
  },

  items: Ember.computed.readOnly('panel.items'),

});
