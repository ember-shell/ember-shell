/* jshint expr:true */
import { expect } from 'chai';
import { it } from 'ember-mocha';

import {
  describe,
  beforeEach
} from 'mocha';

import {
  default as Workspace,
  WorkspaceManager
} from 'ember-shell/system/workspace';

let manager;

describe('SystemWorkspace', function() {

  beforeEach(function() {
    /** this won't work unless we have an application as owner */
    manager = new WorkspaceManager();
  });

  it.skip('should initialize with at least one workspace', function() {
    expect(manager.get('workspaces.length')).to.equal(1);
  });

  it.skip('should be able to set an added workspace as current workspace', function() {
    const workspace = manager.addWorkspace();
    manager.setCurrentWorkspace(workspace);

    expect(manager.get('currentWorkspace')).to.eql(workspace);
  });

  it.skip('should not allow to set a workspace that is not created using the add method', function() {
    const workspace = Workspace.create();
    expect(() => { manager.setCurrentWorkspace(workspace);}).to.throw(Error);
  });

  it.skip('should be able to return the current workspace', function() {
    const workspace = manager.addWorkspace();
    manager.setCurrentWorkspace(workspace);

    expect(manager.get('currentWorkspace')).to.eql(workspace);
  });

  it.skip('should be able to return a given workspaces by number', function() {
    const workspace = manager.addWorkspace();
    manager.setCurrentWorkspace(workspace);

    expect(manager.getWorkspaceByNumber(workspace.get('id'))).to.eql(workspace);
  });

  it.skip('should have an array of workspaces', function() {
    expect(manager.get('workspaces')).to.be.a('array');
  });

  it.skip('should be able to add a workspace', function() {
    const workspace = manager.addWorkspace();
    expect(manager.get('workspaces').includes(workspace)).to.be.true;
  });

  it.skip('should be able to remove a workspace', function() {
    //Adds first workspace:
    manager.addWorkspace();

    const workspace = manager.addWorkspace();
    manager.removeWorkspace(workspace);
    expect(manager.get('workspaces').includes(workspace)).to.be.false;
  });

  it.skip('should not be able to remove a workspace if there is only one', function(){
    const workspace = manager.get('workspaces.firstObject');

    expect(() => { manager.removeWorkspace(workspace); }).to.throw(Error);
    expect(manager.get('workspaces.length')).to.equal(1);
  });

});
