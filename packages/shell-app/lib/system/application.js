import Ember from 'ember';
import EngineDriver from 'ember-shell/system/engine-driver';

/**
 @module ember-shell
 @submodule shell-app
 */

const {
  run,
  RSVP,
  Route,
  assert,
  Router,
  isEmpty,
  NoneLocation
} = Ember;

const DEFAULT_ICON = '/theme/app-icons/default.svg';

/**
 * An Ember-shell Application
 *
 * @class Application
 */
const Application = Ember.Object.extend();

/**
 * Application Manager Class
 *
 * @class  ApplicationManager
 */
export class ApplicationManager {

  constructor(owner) {
    this.owner = owner;
    this.driver = new EngineDriver(owner);

    this._terminatePromises = {};
  }

  start(name, pid, options) {
    const driver = this.driver;

    assert(`Application "${name}" is not available.`, driver.isEngineAvailable(name));

    return driver.loadEngine(name, pid).then( (engineInstance) => {

      const intialConfig = {
        pid,
        name,
        state: '',
        engineInstance,
        title: engineInstance.base.title ? engineInstance.base.title : name, // Use a manifest instad
        icon: engineInstance.base.icon ? engineInstance.base.icon : DEFAULT_ICON, // Use a manifest instad
        elementId: `${pid}-${name}`
      };

      if(options){
        Object.assign(intialConfig, options);
      }

      let application = Application.create(intialConfig);

      run.scheduleOnce('afterRender', this, () => {
        this._bootstrap(engineInstance, application, name);
      });

      return application;
    });
  }

  terminate(name, pid, options) {
    const driver = this.driver;
    assert(`Application "${name}" is not instantiated.`, driver.isInstantiated(name, pid));

    let terminatePromises = this._terminatePromises;

    if (!terminatePromises[name]) {
      terminatePromises[name] = {};
    }

    let enginePromise = terminatePromises[name][pid];

    if (enginePromise) {
      return enginePromise;
    }

    if (this.driver.isInstantiated(name, pid)) {
      let engineInstance = this.driver.getEngineInstance(name, pid);
      enginePromise = RSVP.resolve(this.driver.unloadEngineInstance({name, id: pid}));
    } else {
      enginePromise = RSVP.resolve();
    }

    return enginePromise;
  }

  _bootstrap(engineInstance, application, name){
    this._bootstrapAdk(engineInstance, application, name);
    this._bootstrapApplication(engineInstance);
    this._bootstrapRouter(engineInstance, name);
  }

  _bootstrapAdk(engineInstance, application, name){
    let applicationRoot = Ember.$(`${name}`)[0];

    let engineApplicationController = engineInstance.resolveRegistration('controller:application');

    let engineWindowTitleBarComponent = engineInstance.resolveRegistration('component:shell/window/title-bar');
    let engineAppMainComponent = engineInstance.resolveRegistration('component:shell/app-main');
    let engineWindowStatusBarComponent = engineInstance.resolveRegistration('component:shell/window/status-bar');

    engineApplicationController.reopen({ applicationRoot });
    engineWindowTitleBarComponent.reopen({ application });
    engineAppMainComponent.reopen({ application });
    engineWindowStatusBarComponent.reopen({ application });

    engineInstance.unregister('controller:application');
    engineInstance.register('controller:application', engineApplicationController);
  }

  _bootstrapApplication(engineInstance) {
    engineInstance.register('-application-instance:main', engineInstance, { instantiate: false });
    engineInstance.register('service:asset-loader', this.owner.__container__.lookup('service:asset-loader'), { instantiate: false });
  }

  _bootstrapRouter(engineInstance, name){
    let engineRouter = Router.extend();
    let engineRouteMap = window.require(`${name}/routes`).default;

    let engineApplicationRoute = engineInstance.resolveRegistration('route:application');

    engineRouter.reopen({
      location: 'none',
      _lookupActiveView: function() {
        return this._super.apply(this, arguments) ||
          this.get('hostRouter')._lookupActiveView.apply(this.get('hostRouter'), arguments);
      },
    });

    engineRouter.map(engineRouteMap);

    engineInstance.unregister('router:main');

    engineInstance.register('route:basic', Route);
    engineInstance.register('location:none', NoneLocation);
    engineInstance.register('route:application', engineApplicationRoute);

    engineInstance.register('router:main', engineRouter, { instantiate: true });
    engineInstance.register('router:host', this.owner.__container__.lookup('router:main'), { instantiate: false });

    engineInstance.__container__.registry.injection('router:main', 'namespace', 'application:main');
    engineInstance.inject(`router:host`, 'hostRouter', 'router:main');

    let engineRouterInstance = engineInstance.lookup(`router:main`);

    engineRouterInstance.setupRouter()
    engineRouterInstance.startRouting();
  }

}

export default Application;