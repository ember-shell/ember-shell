import Ember from 'ember';
import EngineDriver from 'ember-shell/system/engine-driver';

/**
 @module ember-shell
 @submodule shell-app
 */

const {
  A,
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
    this.apps = A();
    this.owner = owner;
    this.driver = new EngineDriver(owner);

    this.lastPID = 0;

    this._terminatePromises = {};
  }

  /**
   * Initializes an Ember-shell application
   *
   * Example:
   * ```javascript
   * let appManager = new ApplicationManager(owner);
   *
   * appManager.start('esh-test-app').then( (app) => {
   *   //The applications has booted and you have the instance
   * });
   * ```
   *
   * @param  {String} name    Full application name
   * @param  {Object} options An set of options to initialize an application
   * @return {Promise}        A promise that resolves an application instance
   * @method start
   * @public
   */
  start(name, options) {
    assert(`The application name should be a non-empty string`, typeof name === 'string' && name.length);

    const driver = this.driver;

    assert(`Application "${name}" is not available.`, driver.isEngineAvailable(name));

    this.lastPID++;
    let pid = this.lastPID;

    return driver.loadEngine(name, pid).then( (engineInstance) => {

      const {
        title,
        icon,
        multipleInstances
      } = engineInstance.base;

      const intialConfig = {
        pid,
        name,
        state: '',
        engineInstance,
        elementId: `${pid}-${name}`,
        // TODO: Use a separated manifest :
        multipleInstances: multipleInstances !== undefined ? multipleInstances : true,
        title: title !== undefined ? title : name,
        icon: icon !== undefined ? icon : DEFAULT_ICON
      };

      if(options){
        Object.assign(intialConfig, options);
      }

      if(intialConfig.multipleInstances === false){
        assert(`Application "${name}" doesn't allow multiple instances.`, !this.isAppRunning(name));
      }

      let application = Application.create(intialConfig);

      run.scheduleOnce('afterRender', this, () => {
        this._bootstrap(engineInstance, application, name);
      });

      this.apps.addObject(application);

      return application;
    });
  }

  /**
   * Terminates an Ember-shell application instance by name,
   *
   * Example:
   * ```javascript
   * let appManager = new ApplicationManager(owner);
   *
   * appManager.terminate('esh-test-app', 2).then( (exitCode) => {
   *   //The applications has been terminated and you have the exitCode
   * });
   * ```
   *
   * @param  {String} name    Application name
   * @param  {Number} pid     Process Id (application id)
   * @param  {Object} options Options for thermination
   * @return {Promise}        A promise that resolves an exit code
   * @method terminate
   * @public
   */
  terminate(name, pid, options) {
    const driver = this.driver;

    let app = this.byName(name);

    assert(`Application "${name}" is not running.`, this.apps.includes(app));
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

    this.apps.removeObject(app);

    return enginePromise;
  }

  byName(name){
    let app = this.apps.filter( app => {
      return app.get('name') === name;
    })[0];

    assert(`The application name should be a non-empty string`, typeof name === 'string' && name.length);
    assert(`Application "${name}" is not running.`, app !== undefined);

    return app;
  }

  isAppRunning(name){
    return this.apps.any( app => {
      return app.get('name') === name;
    });
  }

  _bootstrap(engineInstance, application, name){
    this._bootstrapAdk(engineInstance, application, name);
    this._bootstrapApplication(engineInstance);
    this._bootstrapRouter(engineInstance, name);
  }

  _bootstrapAdk(engineInstance, application, name){
    let applicationRoot = Ember.$(`${name}[data-app-id="${application.elementId}"]`)[0];

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