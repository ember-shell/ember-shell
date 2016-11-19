import Ember from 'ember';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';

export default Ember.Mixin.create(UiSizeableMixin, {

  iconCSS: 'background-image: url({{imgUrl}});'

});
