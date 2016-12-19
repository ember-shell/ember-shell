import Ember from 'ember';

/**
 @module ember-shell
 @submodule engine-app
 */

const {
  run,
  RSVP,
  assert,
  isEmpty
} = Ember;

/**
 * It enables to controll every aspect of currently available engines,
 * from asset loading to engine instance initialization and unregistering.
 *
 * @class EngineDriver
 * @param {Object} owner An owner object from the Host Application
 */
export default class EngineDriver {

  constructor(owner) {
    this.owner = owner;

    this.host = owner.lookup('application:main');
    this.assetLoader = owner.lookup('service:asset-loader');

    this._enginePromises = {};
    this._engineInstances = {};
    this._registeredEngines = {};

    this._availableEngines = this._updateAvailableEngines();
  }

  /**
    Handles the engine's asset loading and returns an engineInstance object
    ready to be bootead.

    For example:

    ```javascript
    let engineDriver = new EngineDriver(owner);
    engineDriver.loadEngine('esh-test-app', 1).then( (engineInstance) => {
      engineInstance.boot();
    });
    ```

    @method loadEngine
    @public
  */
  loadEngine(name, id){
    return this.loadEngineInstance({ name, id }).then( (engineInstance) => {

      engineInstance.rootElement = name;
      engineInstance.boot();

      return engineInstance;
    });
  }

  isEngineAvailable(name) {
    return this.getAvailableEngines().includes(name);
  }

  getAvailableEngines() {
    return this._updateAvailableEngines();
  }

  getEngineInstance(name, id){
    return this._engineInstances[name][id];
  }

  isRegistered(name) {
    return this._registeredEngines[name] || false;
  }

  isInstantiated(name, id){
    return !isEmpty(this._engineInstances[name][id]);
  }

  loadEngineInstance({ name, id }) {
    let enginePromises = this._enginePromises;

    if (!enginePromises[name]) {
      enginePromises[name] = {};
    }

    let enginePromise = enginePromises[name][id];

    if (enginePromise) {
      return enginePromise;
    }

    if (this.isRegistered(name)) {
      enginePromise = RSVP.resolve();
    } else {
      enginePromise = this.assetLoader.loadBundle(name).then( () => {
        this._registerEngine(name);
      });
    }

    return enginePromises[name][id] = enginePromise.then( () => {
      return this._constructEngineInstance({ name, id });
    });
  }

  unloadEngineInstance({name, id}) {
    if (this.isInstantiated(name, id)) {
      let engineInstance = this.getEngineInstance(name, id);
      this.owner.unregister(`engine:${name}`);
      run(engineInstance, 'destroy');
    }
  }

  _updateAvailableEngines() {
    const bundles = this.assetLoader.getManifest().bundles;
    return this._availableEngines = Object.keys(bundles);
  }

  _registerEngine(name) {
    if (!this.isRegistered(name)) {
      this.owner.register(`engine:${name}`, window.require(name + '/engine').default);
      this._registeredEngines[name] = true;
    }
  }

  _constructEngineInstance({ name, id }) {
    assert(
      `You attempted to execute an engine named '${name}', but it cannot be found.`,
      this.isRegistered(name)
    );

    let engineInstances = this._engineInstances;

    if (!engineInstances[name]) {
      engineInstances[name] = {};
    }

    let engineInstance = this.owner.buildChildEngineInstance(name);

    return engineInstances[name][id] = engineInstance;
  }

};
