import Ember from 'ember';
import App from 'ember-shell/-private/app';
import Workspace from 'ember-shell/-private/workspace';

export default Ember.Service.extend({

  /*init(){
    this._super(...arguments);
    this.addWorkspace();
  },*/

  running: Ember.A(),
  workspaces: Ember.A(),
  currentWorkspaceNumber: 1,

  currentWorkspace: Ember.computed('workspaces.@each', 'currentWorkspaceNumber', function() {
    return this.get('workspaces').objectAt(this.get('currentWorkspaceNumber') - 1);
  }),

  appsAvailable: Ember.computed(function(){
    /*let owner = Ember.getOwner(this);*/
    return [];
  }),

  isAppAvailable(/*name*/){
    /*let owner = Ember.getOwner(this);
    return owner.hasRegistration(`engine:${name}`);*/
    return true;
  },

  isAppRunning(name){
    return this.get('running').filter( app => {
      return app.get('name') === name;
    }).length;
  },

  exec(name){
    Ember.assert(`The application name should be a non-empty string`, typeof name === 'string' && name.length);
    Ember.assert(`Application "${name}" is not available.`, this.isAppAvailable(name));
    Ember.assert(`Application "${name}" is already running.`, !this.isAppRunning(name));

    let app = App.create({name});
    this.get('running').addObject(app);

    return app;
  },

  kill(name){
    Ember.assert(`Application "${name}" is not running.`, this.isRunning(name));
  },

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
