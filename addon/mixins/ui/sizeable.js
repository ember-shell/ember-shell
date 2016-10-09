import Ember from 'ember';

const defaults = {
  width: 240,
  height: 320
};

export default Ember.Mixin.create({
  
  size: Ember.Object.create(defaults),

  setSize([width, height]){
    this.get('size').setProperties({ width, height });
    return this.getSize();
  },

  getSize(){
    return this.get('size').getProperties('width','height');
  }

});
