import Ember from 'ember';
import SizeableMixin from 'ember-shell/mixins/behaviour/sizeable';
import PositionableMixin from 'ember-shell/mixins/behaviour/positionable';
import PressableMixin from 'ember-shell/mixins/behaviour/pressable';

export default Ember.Mixin.create(SizeableMixin, PressableMixin, {

  tagName: 'panel-item',
  allowMultiple: false,

});
