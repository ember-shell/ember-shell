import Ember from 'ember';
import Styleable from 'ember-variable-styles/mixins/styleable';

const defaults = {
  width: 0,
  widthUnit: 'px',
  height: 0,
  heightUnit: 'px',
};

export default Ember.Mixin.create(Styleable, {

  sizeableCSS: 'width: {{size.width}}{{size.widthUnit}}; height: {{size.height}}{{size.heightUnit}};',

  size: Ember.Object.create(defaults),

  setSize([width, height]){
    this.get('size').setProperties({ width, height });
    return this.getSize();
  },

  getSize(){
    return this.get('size').getProperties('width','height');
  }

});
