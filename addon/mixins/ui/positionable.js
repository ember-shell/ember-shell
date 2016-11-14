import Ember from 'ember';
import Styleable from 'ember-variable-styles/mixins/styleable';

const defaults = { x: 0, y: 0,  z: 0 };

export default Ember.Mixin.create(Styleable, {

  positionableCSS: 'transform: translate({{position.x}}px, {{position.y}}px);',

  position: Ember.Object.create(defaults),

  setPosition([x, y]){
    this.get('position').setProperties({ x, y });
    return this.getPosition();
  },

  getPosition(){
    return this.get('position').getProperties('x','y');
  }

});
