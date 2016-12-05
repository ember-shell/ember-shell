import Ember from 'ember';
import SizeableMixin from 'ember-shell/mixins/behaviour/sizeable';

const defaultIconSize = { width: 32, height: 32 };

export default Ember.Mixin.create(SizeableMixin, {

  iconCSS: 'background-image: url({{iconUrl}})',

  size: Ember.Object.create(defaultIconSize)

});
