import Ember from 'ember';

export default Ember.Mixin.create({

  classNames: ['esh-ui-pressable'],

  touchStart(){
    this.press();
  },

  touchEnd(){
    this.release();
  },

  touchCancel(){
    this.release();
  },

  mouseDown(){
    this.press();
  },

  mouseUp(){
    this.release();
  },

  press(){},
  release(){}

});
