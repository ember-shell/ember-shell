import Ember from 'ember';
import ShellBus from 'ember-shell/services/shell-bus';

/**
 @module ember-shell
 @submodule shell-bus
 */

const {
  Mixin,
  assert
} = Ember;

/**
 * The `bussed` mixin enables an Object to be connected
 * to the bus service and to have automatic initialization
 * of it's bussed events.
 *
 * @class BussedMixin
 * @extends Mixin
 * @public
 */
export default Mixin.create({

  init(){
    this._super(...arguments);

    let busService;

    const busActions = this.busActions;
    const busChannel = busActions ? this.busActions.channel : null;
    const namedObject = this.toString();

    for(let prop in this){
      if(ShellBus.detectInstance(this.get(prop))){
        busService = this.get(prop);
        break;
      }
    }

    assert(`Bussed mixin requires the shell-bus service the be injected on ${namedObject}`, busService);
    assert(`Bussed mixin expects a "busActions" hash on ${namedObject}`, busActions);
    assert(`Bussed mixin expects a channel property(String) on "busActions" hash, on ${namedObject}`, busChannel);

    for(let action in busActions) {
      if(typeof busActions[action] === "function") {
        busService.register(`${busChannel}:${action}`, busActions[action], this);
      }
    }

  }

});