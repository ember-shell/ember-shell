import Ember from 'ember';

const {
  A,
  assert,
  RSVP
} = Ember;

export default class EngineDriver {

  constructor({ assetLoader, owner }) {
    this.assetLoader = assetLoader;
    this.owner = owner;

    this._enginePromises = {};
    this._engineInstances = {};

    this.appsAvailable = this._updateAppsAvailable();
  }

  _updateAppsAvailable() {
    const bundles = this.assetLoader.getManifest().bundles;
    return this.appsAvailable = Object.keys(bundles);
  }

  _engineIsLoaded(name) {
    return this.owner.hasRegistration('engine:' + name);
  }

  _registerEngine(name) {
    if (!this.owner.hasRegistration('engine:' + name)) {
      this.owner.register('engine:' + name, window.require(name + '/engine').default);
    }
  }

  _getEngineInstance({ name, instanceId }) {
    let engineInstances = this._engineInstances;
    return engineInstances[name] && engineInstances[name][instanceId];
  }

  _loadEngineInstance({ name, instanceId }) {
    let enginePromises = this._enginePromises;

    if (!enginePromises[name]) {
      enginePromises[name] = {};
    }

    let enginePromise = enginePromises[name][instanceId];

    // We already have a Promise for this engine instance
    if (enginePromise) {
      return enginePromise;
    }

    if (this._engineIsLoaded(name)) {
      // The Engine is loaded, but has no Promise
      enginePromise = RSVP.resolve();
    } else {
      // The Engine is not loaded and has no Promise
      enginePromise = this.assetLoader.loadBundle(name).then(() => this._registerEngine(name));
    }

    return enginePromises[name][instanceId] = enginePromise.then(() => {
      return this._constructEngineInstance({ name, instanceId });
    });
  }

  _constructEngineInstance({ name, instanceId }) {
    assert(
      'You attempted to execute an engine named \'' + name + '\', but it cannot be found.',
      this.owner.hasRegistration(`engine:${name}`)
    );

    let engineInstances = this._engineInstances;

    if (!engineInstances[name]) {
      engineInstances[name] = {};
    }

    let engineInstance = this.owner.buildChildEngineInstance(name);

    return engineInstances[name][instanceId] = engineInstance;
  }

  executeEngine(name, id) {
    return this._loadEngineInstance({ name, id }).then( (engineInstance) => {

      engineInstance.boot();

      return engineInstance;
    });
  }

};
