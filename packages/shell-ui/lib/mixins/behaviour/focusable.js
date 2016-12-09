import Ember from 'ember';

export default Ember.Mixin.create({

  classNameBindings:['hasFocus'],

  hasFocus: false,
  focusTarget: null,

  focusIn(e){
    if(this.get('focusTarget')){
      if(!this.get('focusTraget.hasFocus')){
        this.set('focusTraget.hasFocus', true);
      }
    } else {
      if(!this.get('hasFocus')){
        this.set('hasFocus', true);
      }
    }
  },

  focusOut(e){
    if(this.get('focusTarget')){
      if(this.get('focusTraget.hasFocus')){
        this.set('focusTraget.hasFocus', false);
      }
    } else {
      if(this.get('hasFocus')){
        this.set('hasFocus', false);
      }
    }
  }

});
