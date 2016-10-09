/* jshint expr:true */
import { expect } from 'chai';
import { beforeEach } from 'mocha';
import Workspace from 'ember-shell/lib/workspace';
import { describeModule, it } from 'ember-mocha';

describeModule(
  'service:shell-workspaces',
  'ShellWorkspacesService',
  { },
  function() {
    
    beforeEach(function() {
      this.workspaces = this.subject();
    });

    it('should not have 0 workspaces', function() {
      let workspacesLenght = this.workspaces.get('workspaces.length');
      expect(workspacesLenght).to.not.equal(0);
    });

    it('should be able to set a workspace as current workspace', function() {
      this.workspaces.add();
      let workspaceTwo = this.workspaces.getByNumber(2);

      this.workspaces.setCurrentWorkspace(workspaceTwo);

      expect(this.workspaces.get('currentWorkspace')).to.eql(workspaceTwo);
    });

    it('should not allow to set a workspace that is not created using the add method', function() {
      let workspace = Workspace.create();      
      expect(() => { this.workspaces.setCurrentWorkspace(workspace);}).to.throw(Error);
    });

    it('should be able to return the current workspace', function() {
      let current = this.workspaces.get('currentWorkspace');
      expect(Workspace.detect(current)).to.be.ok;
    });

    it('should be able to return a given workspaces by number', function() {
      let workspaceOne = this.workspaces.getByNumber(1);
      expect(workspaceOne).to.be.an.instanceof(Workspace);
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
      let currentWorkspace = this.workspaces.get('currentWorkspace');

      expect(() => { this.workspaces.remove(currentWorkspace); }).to.throw(Error);
      expect(this.workspaces.get('workspaces.lenght')).to.equal(1);
    });

  }
);
