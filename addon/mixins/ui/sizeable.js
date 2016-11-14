import Ember from 'ember';
import Styleable from 'ember-variable-styles/mixins/styleable';

const defaults = { width: 0, height: 0 };

export default Ember.Mixin.create(Styleable, {

  sizeableCSS: 'width: {{size.width}}px; height: {{size.height}}px;',

  size: Ember.Object.create(defaults),

  setSize([width, height]){
    this.get('size').setProperties({ width, height });
    return this.getSize();
  },

  getSize(){
    return this.get('size').getProperties('width','height');
  }

});
