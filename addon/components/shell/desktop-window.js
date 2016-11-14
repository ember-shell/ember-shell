import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-window';
import ElementWindowMixin from 'ember-shell/mixins/element/window';

export default Ember.Component.extend(ElementWindowMixin, {
  layout,
  classNames: ['esh-desktop-window'],

  init(){
    this._super(...arguments);

    Ember.run.schedule('afterRender', this, () => {
      this.updateStylesRenderPersist([
        { declaration: 'sizeable', property: 'size.width', value: 320 },
        { declaration: 'sizeable', property: 'size.height', value: 240 },
        { declaration: 'positionable', property: 'position.x', value: 50 },
        { declaration: 'positionable', property: 'position.y', value: 50 }
      ]);
    });
  }

});
