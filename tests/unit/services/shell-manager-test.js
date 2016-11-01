/* jshint expr:true */
import { expect } from 'chai';
import Ember from 'ember';
import { beforeEach } from 'mocha';
import { describeModule, it } from 'ember-mocha';
import Workspace from 'ember-shell/-private/workspace';

let manager;

describeModule(
  'service:shell-manager',
  'ShellManagerService',
  {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  },
  function() {

    beforeEach(function() {
      manager = this.subject();
      // Reset? ¯\_(⌣̯̀ ⌣́)_/¯
      manager.set('running', []);
      manager.set('workspaces', Ember.A());
      manager.set('currentWorkspaceNumber', 0);
    });

    it('should initialize with an empty array of running apps', function() {
      expect(manager.get('running.length')).to.equal(0);
    });

    it('should be able to start a new app instance by name', function() {
      let appInstance = manager.exec('test-app');
      expect(manager.get('running').includes(appInstance)).to.be.ok;
    });

    it('should be able to tell that an application is available', function (){
      manager.exec('test-app');
      expect(manager.isAppAvailable('test-app')).to.be.true;
    });

    it('should initialize with an empty array workspaces', function() {
      expect(manager.get('workspaces.length')).to.equal(0);
    });

    it('should be able to set an added workspace as current workspace', function() {
      let workspace = manager.addWorkspace();
      manager.setCurrentWorkspace(workspace);

      expect(manager.get('currentWorkspace')).to.eql(workspace);
    });

    it('should not allow to set a workspace that is not created using the add method', function() {
      let workspace = Workspace.create();
      expect(() => { manager.setCurrentWorkspace(workspace);}).to.throw(Error);
    });

    it('should be able to return the current workspace', function() {
      var workspace = manager.addWorkspace();
      manager.setCurrentWorkspace(workspace);

      expect(manager.get('currentWorkspace')).to.eql(workspace);
    });

    it('should be able to return a given workspaces by number', function() {
      var workspace = manager.addWorkspace();
      manager.setCurrentWorkspace(workspace);

      expect(manager.getWorkspaceByNumber(workspace.get('id'))).to.eql(workspace);
    });

    it('should have an array of workspaces', function() {
      expect(manager.get('workspaces')).to.be.a('array');
    });

    it('should be able to add a workspace', function() {
      let workspace = manager.addWorkspace();
      expect(manager.get('workspaces').includes(workspace)).to.be.true;
    });

    it('should be able to remove a workspace', function() {
      //Adds first workspace:
      manager.addWorkspace();

      let workspace = manager.addWorkspace();
      manager.removeWorkspace(workspace);
      expect(manager.get('workspaces').includes(workspace)).to.be.false;
    });

    it('should not be able to remove a workspace if there is only one', function(){
      let workspace = manager.addWorkspace();

      expect(() => { manager.removeWorkspace(workspace); }).to.throw(Error);
      expect(manager.get('workspaces.length')).to.equal(1);
    });

  }
);
