import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/panel/menu-button';
import PanelItemMixin from 'ember-shell/mixins/element/panel-item';

export default Ember.Component.extend(PanelItemMixin, {
  layout,
  classNames: ['esh-panel-menu-button'],
  classNameBindings: ['isActive:active'],

  bus: Ember.inject.service('shell-bus'),

  init() {
    this._super(...arguments);

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 50 },
      { declaration: 'sizeable', property: 'size.height', value: 36 },
      { declaration: 'sizeable', property: 'size.widthUnit', value: 'px' },
      { declaration: 'sizeable', property: 'size.heightUnit', value: 'px' }
    ]);
  },

  isActive: false,

  press(){
    this.get('bus').send('shell:toggleAppBox').then((state) => {
      this.set('isActive', state);
    });
  }

});
