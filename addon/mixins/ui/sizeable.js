import Ember from 'ember';
import UiStyleableMixin from './styleable';

const defaults = { width: 240, height: 320 };

export default Ember.Mixin.create(UiStyleableMixin, {
    
  style: 'width: {{size.width}}px; height: {{size.height}}px;',

  size: Ember.Object.create(defaults),

  setSize([width, height]){
    this.get('size').setProperties({ width, height });
    return this.getSize();
  },

  getSize(){
    return this.get('size').getProperties('width','height');
  }

});
