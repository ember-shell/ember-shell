/**
 * @module ember-shell
 * @submodule shell-manager
 */

import Ember from 'ember';
import { Application as App } from 'ember-shell/app';
import { Panel } from 'ember-shell/desktop';
import { Workspace } from 'ember-shell/desktop';

/**
 * `shell-manager` handles and exposes core functionalities such as shell-apps
 *
 * @class ShellManager
 * @namespace ember-shell
 * @extends Ember.Service
 * @public
 */
export default Ember.Service.extend({

  init(){
    this._super(...arguments);

    this.apps = Ember.A();
    this.panels = Ember.A();
    this.workspaces = Ember.A();

    this.lastPID = 0;
    this.currentWorkspaceNumber = 0;

    this.addPanel({ isPrimary: true });
    this.addWorkspace();
  },

  /* Apps */

  appsAvailable: Ember.computed(function(){
    /*let owner = Ember.getOwner(this);*/
    return Ember.A();
  }),

  isAppAvailable(/*name*/){
    /*let owner = Ember.getOwner(this);
    return owner.hasRegistration(`engine:${name}`);*/
    return true;
  },

  isAppRunning(name){
    return this.get('apps').any( app => {
      return app.get('name') === name;
    });
  },

  exec(name){
    Ember.assert(`The application name should be a non-empty string`, typeof name === 'string' && name.length);
    Ember.assert(`Application "${name}" is not available.`, this.isAppAvailable(name));
    Ember.assert(`Application "${name}" is already running.`, !this.isAppRunning(name));

    let app = App.create({
      pid: this.incrementProperty('lastPID'),
      name
    });

    this.get('apps').addObject(app);

    return app;
  },

  terminate(name, kill){
    let app = this.getAppByName(name);
    Ember.assert(`Application "${name}" is not running.`, this.get('apps').includes(app));

    if(kill){
      this.get('apps').removeObject(app);
      return -1;
    }

    return app.close().then( code => {
      this.get('apps').removeObject(app);
      return code;
    }).catch( err => {
      console.error(err);
    });
  },

  getAppByName(name){
    let app = this.get('apps').filter( app => {
      return app.get('name') === name;
    })[0];

    Ember.assert(`The application name should be a non-empty string`, typeof name === 'string' && name.length);
    Ember.assert(`Application "${name}" is not running.`, app !== undefined);

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
    Ember.assert("Can't remove the primary panel", panel.get('isPrimary') === false );

    panels.removeObject(panel);
  },

  /* Workspaces */

  currentWorkspace: Ember.computed('workspaces.@each', 'currentWorkspaceNumber', function() {
    return this.get('workspaces').objectAt(this.get('currentWorkspaceNumber') - 1);
  }),

  setCurrentWorkspace(workspace){
    Ember.assert("Not a workspace instance", workspace instanceof Workspace);
    Ember.assert("Not currently on available workspaces", this.get('workspaces').includes(workspace));

    this.set('currentWorkspaceNumber', this.get('workspaces').indexOf(workspace) + 1);
  },

  getWorkspaceByNumber(number){
    let workspaces = this.get('workspaces');
    Ember.assert("Cannot get the workspace", typeof number === 'number' && number >= 1 && number <= workspaces.get('length'));
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
    Ember.assert("Can't remove the last workspace", workspaces.length > 1);

    workspaces.removeObject(workspace);
  },

});
