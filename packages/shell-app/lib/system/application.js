/**
 @module ember-shell
 @submodule shell-app
 */
import Ember from 'ember';


const EXIT_OK = 0/*,
      EXIT_KILL = -1*/;
/**
 * An Ember-shell Application
 *
 *
 * @class ShellApplication
 */
export default Ember.Object.extend({

  pid: null,
  name: null,
  title: null,
  icon: null,

  state: '', // change to a computed property + state machine,
  memory: '', // ???

  hasStatusBar: false,

  close(){
    return new Ember.RSVP.Promise(function(resolve/*, reject*/) {
      resolve(EXIT_OK);
    });
  }

});
