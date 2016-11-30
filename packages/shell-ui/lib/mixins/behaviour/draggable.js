/* global window */
import Ember from 'ember';
import { Draggable, PositionableBehaviour } from 'ember-shell/ui';

export default Ember.Mixin.create(PositionableBehaviour, {

  draggableHandleClassName: 'esh-ui-draggable-handle',
  draggUpdateFn: null,

  didInsertElement(){
    const target = this.$()[0];
    const updateFn = this.get('draggUpdateFn') ? this.get('draggUpdateFn') : (x, y) => {
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
      this.set('_draggable', new Draggable(target, options));
    });
  }

});
