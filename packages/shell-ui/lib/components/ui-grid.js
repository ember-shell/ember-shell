import Ember from 'ember';
import layout from 'ember-shell/templates/ui/ui-grid';
import GridElement from 'ember-shell/mixins/element/grid';

const defaults = {
  direction: 'row',
  multilevels: true,
  allowDrag: false,
  itemHeight: '48px',
  itemWidth: '48px'
}

const UiGridComponent = Ember.Component.extend(GridElement, {
  layout,
  tagName: 'ui-grid',

  gridableCSS: "flex-direction: {{direction}};",

  init(){
    this._super(...arguments);

    Object.assign(this, defaults);

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 100 },
      { declaration: 'sizeable', property: 'size.height', value: 100 },
      { declaration: 'sizeable', property: 'size.widthUnit', value: '%' },
      { declaration: 'sizeable', property: 'size.heightUnit', value: '%' },
    ]);
  }

});

UiGridComponent.reopenClass({
  positionalParams: ['items', 'direction', 'multilevels']
});

export default UiGridComponent;
