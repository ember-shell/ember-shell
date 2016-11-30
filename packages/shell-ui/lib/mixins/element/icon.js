import Ember from 'ember';
import SizeableMixin from 'ember-shell/mixins/behaviour/sizeable';

export default Ember.Mixin.create(SizeableMixin, {

  iconCSS: 'background-image: url({{imgUrl}});'

});
