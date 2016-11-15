import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-panel';
import ElementPanelMixin from 'ember-shell/mixins/element/panel';

export default Ember.Component.extend(ElementPanelMixin, {
  layout,
  classNames: ['esh-desktop-panel'],

  manager: Ember.inject.service('shell-manager'),

  init(){
    this._super(...arguments);

    this.set('panel.component', this);

    /*Ember.run.schedule('afterRender', this, () => {
      this.updateStylesRenderPersist([
        { declaration: 'sizeable', property: 'size.width', value: 320 },
        { declaration: 'sizeable', property: 'size.height', value: 240 },
        { declaration: 'positionable', property: 'position.x', value: 50 },
        { declaration: 'positionable', property: 'position.y', value: 50 }
      ]);
    });*/
  },
});
