import Ember from 'ember';

const EXIT_OK = 0/*,
      EXIT_KILL = -1*/;

export default Ember.Object.extend({

  pid: null,
  name: null,
  title: null,

  close(){
    return new Ember.RSVP.Promise(function(resolve/*, reject*/) {
      resolve(EXIT_OK);
    });
  }

});
