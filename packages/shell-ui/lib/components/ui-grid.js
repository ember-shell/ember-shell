import Ember from 'ember';
import layout from 'ember-shell/templates/ui/ui-grid';
import GridElement from 'ember-shell/mixins/element/grid';

const defaults = {
  direction: 'row',
  multilevels: true,
  allowDrag: false,
  itemHeight: '48px',
  itemWidth: '48px',
  alignItems: 'center',
  alignContent: 'flex-start',
  justifyContent: 'space-between',
  padding: '0'
}

const UiGridComponent = Ember.Component.extend(GridElement, {
  layout,
  tagName: 'ui-grid',

  gridableCSS: `flex-direction: {{direction}};align-items: {{alignItems}};align-content: {{alignContent}};justify-content: {{justifyContent}}; padding: {{padding}}`,

  init(){
    this._super(...arguments);

    Object.assign(this, defaults);

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 100 },
      { declaration: 'sizeable', property: 'size.height', value: 100 },
      { declaration: 'sizeable', property: 'size.widthUnit', value: '%' },
      { declaration: 'sizeable', property: 'size.heightUnit', value: '%' },
      { declaration: 'gridable', property: 'direction', value: defaults.direction },
      { declaration: 'gridable', property: 'alignItems', value: defaults.alignItems },
      { declaration: 'gridable', property: 'alignContent', value: defaults.alignContent },
      { declaration: 'gridable', property: 'justifyContent', value: defaults.justifyContent },
      { declaration: 'gridable', property: 'padding', value: defaults.padding },
    ]);
  }

});

UiGridComponent.reopenClass({
  positionalParams: ['items', 'direction', 'multilevels']
});

export default UiGridComponent;
