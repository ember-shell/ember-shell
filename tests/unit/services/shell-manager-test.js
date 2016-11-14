/* jshint expr:true */
/* global: Promise */
import { expect } from 'chai';
import Ember from 'ember';
import { beforeEach } from 'mocha';
import { describeModule, it } from 'ember-mocha';
import Workspace from 'ember-shell/-private/workspace';

const TEST_APP_NAME = 'test-app';

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
      manager.set('apps', Ember.A());
      manager.set('workspaces', Ember.A());
      manager.set('currentWorkspaceNumber', 0);
    });

    it('should initialize with an empty array of running apps', function() {
      expect(manager.get('apps.length')).to.equal(0);
    });

    it('should be able to start a new app instance by name', function() {
      let appInstance = manager.exec(TEST_APP_NAME);
      expect(manager.get('apps').includes(appInstance)).to.be.ok;
    });

    it.skip('should be able to list available applications', function() {
      expect(0);
    });

    it.skip('should be able to tell that an application is available', function (){
      manager.exec(TEST_APP_NAME);
      expect(manager.isAppAvailable(TEST_APP_NAME)).to.be.true;
    });

    it('should be able to tell that an application is running', function (){
      manager.exec(TEST_APP_NAME);
      expect(manager.isAppRunning(TEST_APP_NAME)).to.be.true;
    });

    it('should be able to close a running application', function() {
      manager.exec(TEST_APP_NAME);
      manager.terminate(TEST_APP_NAME).then( exitCode => {
        expect(exitCode).to.equal(0); // EXIT_OK code number
        expect(manager.isAppRunning(TEST_APP_NAME)).to.be.false;
      });
    });

    it('should be able to kill a running application', function() {
      manager.exec(TEST_APP_NAME);
      expect(manager.terminate(TEST_APP_NAME, true)).to.equal(-1); // EXIT_KILL code number
      expect(manager.isAppRunning(TEST_APP_NAME)).to.be.false;
    });

    it('should initialize with an empty array workspaces', function() {
      expect(manager.get('workspaces.length')).to.equal(0);
    });

    it('should be able to return a running application by name', function() {
      manager.exec(TEST_APP_NAME);
      let app = manager.getAppByName(TEST_APP_NAME);

      expect(app).to.exist;
      expect(app.get('name')).to.equal(TEST_APP_NAME);
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
