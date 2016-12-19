import Ember from 'ember';
import Panel from 'ember-shell/system/panel';
import Workspace from 'ember-shell/system/workspace';
import { ApplicationManager } from 'ember-shell/system/application';

/**
 * @module ember-shell
 * @submodule shell-manager
 */

const {
  A,
  assert,
  Service,
  getOwner,
  computed
} = Ember;

/**
 * `shell-manager` handles and exposes core functionalities such as shell-apps
 *
 * @class ShellManager
 * @namespace ember-shell
 * @extends Service
 * @public
 */
export default Service.extend({

  init(){
    this._super(...arguments);

    this.apps = A();
    this.panels = A();
    this.workspaces = A();

    this.appManager = new ApplicationManager(getOwner(this));

    this.lastPID = 0;
    this.currentWorkspaceNumber = 0;

    this.addPanel({ isPrimary: true });
    this.addWorkspace();
  },

  /* Apps */

  appsAvailable: computed.readOnly('driver.getAvailableEngines'),

  isAppRunning(name){
    return this.get('apps').any( app => {
      return app.get('name') === name;
    });
  },

  exec(name, options){
    assert(`The application name should be a non-empty string`, typeof name === 'string' && name.length);
    assert(`Application "${name}" is already running.`, !this.isAppRunning(name));

    let newPID = this.incrementProperty('lastPID');

    return this.appManager.start(name, newPID, options).then( (app) => {
      this.get('apps').addObject(app);
      return app;
    });
  },

  terminate(name, kill){
    let app = this.getAppByName(name);
    assert(`Application "${name}" is not running.`, this.get('apps').includes(app));

    return this.appManager.terminate(name, app.pid, { kill }).then( (exitCode) => {
      this.get('apps').removeObject(app);
      return exitCode;
    });
  },

  getAppByName(name){
    let app = this.get('apps').filter( app => {
      return app.get('name') === name;
    })[0];

    assert(`The application name should be a non-empty string`, typeof name === 'string' && name.length);
    assert(`Application "${name}" is not running.`, app !== undefined);

    return app;
  },

  /* Panels */

  addPanel(options){
    options = options ? options : {};
    let panel = Panel.create(options);
    this.get('panels').addObject(panel);
    return panel;
  },

  removePanel(panel){
    let panels = this.get('panels');
    assert("Can't remove the primary panel", panel.get('isPrimary') === false );

    panels.removeObject(panel);
  },

  /* Workspaces */

  currentWorkspace: computed('workspaces.@each', 'currentWorkspaceNumber', function() {
    return this.get('workspaces').objectAt(this.get('currentWorkspaceNumber') - 1);
  }),

  setCurrentWorkspace(workspace){
    assert("Not a workspace instance", workspace instanceof Workspace);
    assert("Not currently on available workspaces", this.get('workspaces').includes(workspace));

    this.set('currentWorkspaceNumber', this.get('workspaces').indexOf(workspace) + 1);
  },

  getWorkspaceByNumber(number){
    let workspaces = this.get('workspaces');
    assert("Cannot get the workspace", typeof number === 'number' && number >= 1 && number <= workspaces.get('length'));
    return workspaces.objectAt(number - 1);
  },

  addWorkspace(){
    let nextLength = this.get('workspaces.length') + 1;
    let workspace = Workspace.create({
      id: nextLength,
      position: nextLength
    });

    //TODO: add workspace limit
    this.get('workspaces').push(workspace);
    return workspace;
  },

  removeWorkspace(workspace){
    let workspaces = this.get('workspaces');
    assert("Can't remove the last workspace", workspaces.length > 1);

    workspaces.removeObject(workspace);
  },

});
