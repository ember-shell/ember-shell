import Ember from 'ember';
import { PanelManager } from 'ember-shell/system/panel';
import { WorkspaceManager } from 'ember-shell/system/workspace';
import { ApplicationManager } from 'ember-shell/system/application';

/**
 * @module ember-shell
 * @submodule shell-main
 */

const {
  Service,
  getOwner,
  computed,
  inject
} = Ember;

/**
 * The `shell-manager` service is considered the public API
 * that exposes core functionalities that helps manage Applications,
 * Workspaces and Panels.
 *
 * @class ShellManager
 * @extends Service
 * @public
 */
export default Service.extend({

  /**
   * @property {[Object]} apps Returns currently running applications
   * @public
   */
  apps: computed.readOnly('appManager.apps'),

  /**
   * @property {[Object]} panels Returns current instantiaded panels
   * @public
   */
  panels: computed.readOnly('panelManager.panels'),

  /**
   * @property {[Object]} workspaces Returns current instantiated workspaces
   * @public
   */
  workspaces: computed.readOnly('workspaceManager.workspaces'),

  /**
   * @property {[Object]} appsAvailable Returns available engines that are/can be loaded
   * @public
   */
  appsAvailable: computed.readOnly('driver.getAvailableEngines'),

  /**
   * @property {Object} currentWorkspace Returns the current displaying workspace
   * @public
   */
  currentWorkspace: computed('workspaceManager.workspaces.@each', 'workspaceManager.currentWorkspaceNumber', function() {
    return this.get('workspaceManager.workspaces').objectAt(this.get('workspaceManager.currentWorkspaceNumber') - 1);
  }),

  /**
   * @property {Object} config Stores the merged default with environment confis.
   * @public
   */
  config: {},

  /**
   * Bootups ember-shell by initializing the core manager classes
   *
   * @method boot
   * @private
   */
  boot() {
    this.appManager = new ApplicationManager(getOwner(this));
    this.panelManager = new PanelManager(getOwner(this));
    this.workspaceManager = new WorkspaceManager();
  },

  /**
   * Executes an Ember-shell application
   *
   * Example:
   * ```javascript
   * let shellManager = Ember.inject.service('shell-manager');
   *
   * shellManager.exec('esh-test-app').then( (app) => {
   *   //The applications has booted and you have the instance
   * });
   * ```
   *
   * @param  {String} name    Full application name
   * @param  {Object} options An set of options to initialize an application
   * @return {Promise}        A promise that resolves an application instance
   * @method exec
   * @public
   */
  exec(name, options){
    return this.appManager.start(name, options);
  },

  /**
   * Terminates an Ember-shell application instance by name,
   *
   * Example:
   * ```javascript
   * let shellManager = Ember.inject.service('shell-manager');
   *
   * shellManager.terminate('esh-test-app', 2).then( (exitCode) => {
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
  terminate(name, pid, options){
    return this.appManager.terminate(name, pid, options);
  }

});
