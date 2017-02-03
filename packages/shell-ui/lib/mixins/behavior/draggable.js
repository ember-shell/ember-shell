/* global window */
import Ember from 'ember';
import Draggable from 'ember-shell/system/draggable';
import PositionableMixin from 'ember-shell/mixins/behavior/positionable';

export default Ember.Mixin.create(PositionableMixin, {

  manager: Ember.inject.service('shell-manager'),

  draggableHandleClassName: 'esh-ui-draggable-handle',
  draggUpdateFn: null,

  didInsertElement(){
    const target = this.$()[0];
    const updateFn = this.get('draggUpdateFn') ? this.get('draggUpdateFn') : (x, y) => {
      //target.style["transform"] = `translate(${x}px, ${y}px)`;
      this.updateStylesRender([
        {declaration: 'positionable', property: 'position.x', value: x},
        {declaration: 'positionable', property: 'position.y', value: y},
      ]);
    };

    const options = {
      updateFn,
      handlerClass: this.get('draggableHandleClassName'),
      startCallback: this.get('draggStartCallback') ? this.get('draggStartCallback').bind(this) : null,
      endCallback: this.get('draggEndCallback') ? this.get('draggEndCallback').bind(this) : null,
      moveCallback: this.get('draggMoveCallback') ? this.get('draggMoveCallback').bind(this) : null
    };

    Ember.run.next(this, () => {
      let limits = this.get('manager.panelManager').calculateAreaLimits();

      options["limits"] = limits;

      this.set('_draggable', new Draggable(target, options));
    });
  }

});
