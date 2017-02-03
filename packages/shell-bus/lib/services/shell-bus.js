import Ember from 'ember';

/**
 * @module ember-shell
 * @submodule shell-bus
 */

const {
  Service,
  computed,
  assert,
  isEmpty,
  RSVP
} = Ember;

/**
 * The `shell-bus` service allows communications between
 * different applications and/or the ember-shell core managers
 *
 * --- TODO: Explain how it works ---
 *
 * @class ShellBus
 * @extends Service
 * @public
 */
export default Service.extend({

  registry: {},

  register(channelPath, callback, owner) {
    let registry = this.get('registry');

    registry[channelPath] = {
      callback,
      owner
    };
  },

  send(channelPath, ...params) {
    let registry = this.get('registry');
    assert(`The action "${channelPath}" is not registered`, registry[channelPath]);

    return new RSVP.Promise((resolve, reject) => {
      let { callback, owner } = registry[channelPath];
      try {
        let sent = callback.apply(owner, ...params);

        if(sent.then){
          return sent;
        }

        resolve(sent);
      } catch(e) {
        reject(e);
      }
    });
  }

});
