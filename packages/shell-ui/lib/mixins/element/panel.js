import Ember from 'ember';
import SizeableMixin from 'ember-shell/mixins/behaviour/sizeable';
import DraggableMixin from 'ember-shell/mixins/behaviour/draggable';
import AlignableMixin from 'ember-shell/mixins/behaviour/alignable';
import PositionableMixin from 'ember-shell/mixins/behaviour/positionable';

export default Ember.Mixin.create(
  SizeableMixin,
  DraggableMixin,
  AlignableMixin,
  PositionableMixin,
{});
