import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-workspace';
import ElementBoxMixin from 'ember-shell/mixins/element/box';

export default Ember.Component.extend(ElementBoxMixin, {
  layout,
  workspace: null,
  classNames: ['esh-desktop-workspace'],

  manager: Ember.inject.service('shell-manager'),
  apps: Ember.computed.alias('manager.apps'),

  sizeableCSS: 'width: {{size.width}}%; height: {{size.height}}%;',

  init(){
    this._super(...arguments);

    Ember.run.next(this, () => {
      this.updateStylesRenderPersist([
        { declaration: 'sizeable', property: 'size.width', value: 100 },
        { declaration: 'sizeable', property: 'size.height', value: 100 },
        { declaration: 'positionable', property: 'position.x', value: 0 },
        { declaration: 'positionable', property: 'position.y', value: 0 }
      ]);
    });

  }

});
