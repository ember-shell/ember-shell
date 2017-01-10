import Ember from 'ember';
import Styleable from 'ember-variable-styles/mixins/styleable';

const defaults = {
  x: 0,
  xUnit: 'px',
  y: 0,
  yUnit: 'px',
  z: 'auto'
};

export default Ember.Mixin.create(Styleable, {

  positionableCSS: 'transform: translate({{position.x}}{{position.xUnit}}, {{position.y}}{{position.yUnit}}); z-index: {{position.z}};',
  classNames: ['esh-ui-positionable'],

  position: Ember.Object.create(defaults),

  setPosition([x, y]){
    this.get('position').setProperties({ x, y });
    return this.getPosition();
  },

  getPosition(){
    return this.get('position').getProperties('x','y');
  }

});
