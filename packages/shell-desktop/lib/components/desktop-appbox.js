import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/desktop-appbox';
import SizeableMixin from 'ember-shell/mixins/behavior/sizeable';
import PositionableMixin from 'ember-shell/mixins/behavior/positionable';

export default Ember.Component.extend(SizeableMixin, PositionableMixin, {
  layout,
  tagName: 'shell-appbox',

  manager: Ember.inject.service('shell-manager'),

  didInsertElement() {
    this._super(...arguments);

    Ember.run.next(this, () => {

      let limits = this.get('manager.panelManager').calculateAreaLimits();

      this.updateStylesRenderPersist([
        { declaration: 'sizeable', property: 'size.width', value: `calc(100% - ${limits.left}px - ${limits.right}px)` },
        { declaration: 'sizeable', property: 'size.height', value: `calc(100% - ${limits.top}px - ${limits.bottom}px)` },
        { declaration: 'sizeable', property: 'size.widthUnit', value: '' },
        { declaration: 'sizeable', property: 'size.heightUnit', value: '' },
        { declaration: 'positionable', property: 'position.x', value: limits.left },
        { declaration: 'positionable', property: 'position.y', value: limits.top }
      ]);
    });

  },

});
