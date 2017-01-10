import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/panel/main-menu';
import PanelItemMixin from 'ember-shell/mixins/element/panel-item';

export default Ember.Component.extend(PanelItemMixin, {
  layout,
  classNames: ['esh-panel-main-menu'],

  init(){
    this._super(...arguments);

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 24 },
      { declaration: 'sizeable', property: 'size.height', value: 24 },
      { declaration: 'sizeable', property: 'size.widthUnit', value: 'px' },
      { declaration: 'sizeable', property: 'size.heightUnit', value: 'px' },
    ]);
  }

});
