import Ember from 'ember';
import layout from 'ember-shell/templates/ui/ui-icon';
import IconElement from 'ember-shell/mixins/element/icon';

export default Ember.Component.extend(IconElement, {
  layout,
  tagName: 'ui-icon',

  init(){
    this._super(...arguments);

    let size = {
      width: this.iconWidth || this.iconSize || 24,
      height: this.iconHeight || this.iconSize || 24
    };

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: size.width },
      { declaration: 'sizeable', property: 'size.height', value: size.height },
      { declaration: 'sizeable', property: 'size.widthUnit', value: 'px' },
      { declaration: 'sizeable', property: 'size.heightUnit', value: 'px' },
    ]);

    if(this.iconUrl){
      this.updateStylesRenderPersist([
        { declaration: 'icon', property: 'iconUrl', value: this.iconUrl }
      ]);
    }
  }
});
