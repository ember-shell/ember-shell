import Ember from 'ember';
import Workspace from 'ember-shell/lib/workspace';

export default Ember.Service.extend({

  init(){
    this._super(...arguments);
    this.add();
  },

  workspaces: Ember.A(),
  currentWorkspaceNumber: 1,

  currentWorkspace: Ember.computed('workspaces.@each', 'currentWorkspaceNumber', function() {
    return this.get('workspaces').objectAt(this.get('currentWorkspaceNumber') - 1);
  }),

  setCurrentWorkspace(workspace){
    Ember.assert("Not a workspace instance", workspace instanceof Workspace);
    Ember.assert("Not currently on available workspaces", this.get('workspaces').includes(workspace));

    this.set('currentWorkspaceNumber', this.get('workspaces').indexOf(workspace) + 1);
  },

  getByNumber(number){
    let workspaces = this.get('workspaces');
    Ember.assert("Cannot get the workspace", typeof number === 'number' && number >= 1 && number <= workspaces.get('length'));
    return workspaces.objectAt(number - 1);
  },

  add(){
    let nextLength = this.get('workspaces.length') + 1;
    let workspace = Workspace.create({
      id: nextLength,
      position: nextLength
    });
    
    //TODO: add workspace limit
    this.get('workspaces').addObject(workspace);
    this.setCurrentWorkspace(workspace);
    return workspace;
  },

  remove(workspace){
    let workspaces = this.get('workspaces');
    Ember.assert("Can't remove the last workspace", workspaces.length > 1);

    workspaces.removeObject(workspace);
  }

});
