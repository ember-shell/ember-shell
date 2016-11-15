import Ember from 'ember';
import ElementBoxMixin from 'ember-shell/mixins/element/box';

export default Ember.Mixin.create(ElementBoxMixin, {

  iconCSS: 'background-image: url({{imgUrl}});'

});
