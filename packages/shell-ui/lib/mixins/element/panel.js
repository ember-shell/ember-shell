import Ember from 'ember';
import SizeableMixin from 'ember-shell/mixins/behavior/sizeable';
import AlignableMixin from 'ember-shell/mixins/behavior/alignable';
import PositionableMixin from 'ember-shell/mixins/behavior/positionable';

export default Ember.Mixin.create(
  SizeableMixin,
  AlignableMixin,
  PositionableMixin,
{});
