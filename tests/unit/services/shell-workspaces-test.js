/* jshint expr:true */
import { expect } from 'chai';
import Ember from 'ember';
import { beforeEach, afterEach } from 'mocha';
import { describeModule, it } from 'ember-mocha';
import Workspace from 'ember-shell/lib/workspace';

describeModule(
  'service:shell-workspaces',
  'ShellWorkspacesService',
  { unit: true },
  function() {
    
    beforeEach(function() {
      this.workspaces = this.subject();
    });

    afterEach(function() {
      this.workspaces.destroy();
    });

    it('should not have 0 workspaces', function() {
      let workspacesLenght = this.workspaces.get('workspaces.length');
      expect(workspacesLenght).to.not.equal(0);
    });

    it('should be able to set an added workspace as current workspace', function() {
      let workspace = this.workspaces.add();
      this.workspaces.setCurrentWorkspace(workspace);

      expect(this.workspaces.get('currentWorkspace')).to.eql(workspace);
    });

    it('should not allow to set a workspace that is not created using the add method', function() {
      let workspace = Workspace.create();
      expect(() => { this.workspaces.setCurrentWorkspace(workspace);}).to.throw(Error);
    });

    it('should be able to return the current workspace', function() {
      let current = this.workspaces.get('currentWorkspace'),
          currentNumber = this.workspaces.get('currentWorkspaceNumber');

      expect(current).to.exist;
      expect(current.get('id')).to.equal(currentNumber);
    });

    it('should be able to return a given workspaces by number', function() {
      let workspace = this.workspaces.getByNumber(1);

      expect(workspace.get('id')).to.equal(1);
    });

    it('should have an array of workspaces', function() {
      let workspaces = this.workspaces.get('workspaces');
      expect(workspaces).to.be.a('array');
    });

    it('should be able to add one more workspaces', function() {
      let currentWorkspacesLenght = this.workspaces.get('workspaces.length');

      this.workspaces.add();
      let newWorkspacesLength = this.workspaces.get('workspaces.length');

      expect(newWorkspacesLength).to.equal(currentWorkspacesLenght + 1);
    });

    it('should be able to remove a workspace', function() {
      let currentWorkspacesLenght = this.workspaces.get('workspaces.length'),
          currentWorkspace = this.workspaces.get('currentWorkspace');

      this.workspaces.remove(currentWorkspace);
      let newWorkspacesLength = this.workspaces.get('workspaces.length');

      expect(newWorkspacesLength).to.equal(currentWorkspacesLenght - 1);
    });

    it('should not be able to remove a workspace if there is only one', function(){
      this.workspaces.set('workspaces', Ember.A());
      this.workspaces.set('currentWorkspaceNumber', 0);
      this.workspaces.add();

      let currentWorkspace = this.workspaces.get('currentWorkspace');

      expect(() => { this.workspaces.remove(currentWorkspace); }).to.throw(Error);
      expect(this.workspaces.get('workspaces.length')).to.equal(1);
    });

  }
);
