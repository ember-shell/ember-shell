import Ember from 'ember';

/**
 @module ember-shell
 @submodule shell-desktop
 */

const {
  A,
  assert
} = Ember;

/**
 * An Ember-shell Workspace
 *
 * @class Workspace
 */
const Workspace = Ember.Object.extend({});

/**
 * Workspace Manager Class
 *
 * @class WorkspaceManager
 */
export class WorkspaceManager {

  constructor() {
    this.workspaces = A();
    this.currentWorkspaceNumber = 0;

    this._setupPrimaryWorkspace();
  }

  /**
   * Adds a new workspace to the workspaces list
   *
   * Example:
   * ```javascript
   * workspaceManager.addWorkspace();
   * //or
   * workspaceManager.addWorkspace({
   *   position: 2,
   *   // ... moreProps ...
   * });
   * ```
   *
   * @param {Object} options A hash of options
   * @method addWorkspace
   * @public
   */
  addWorkspace(options){
    const nextLength = this.workspaces.length + 1;

    let createOptions = {
      id: nextLength,
      position: nextLength
    };

    Object.assign(createOptions, options);

    let workspace = Workspace.create(createOptions);

    //TODO: add workspace limit
    this.workspaces.pushObject(workspace);
    return workspace;
  }

  /**
   * Removes a workspace from the workspaces list
   *
   * Example:
   * ```javascript
   * workspaceManager.removeWorkspace(workspaceToRemove);
   * ```
   *
   * @param {Object} worksapce A workspace instance to remove
   * @method removeWorkspace
   * @public
   */
  removeWorkspace(workspace){
    assert("Can't remove the last workspace", this.workspaces.length > 1);

    this.workspaces.removeObject(workspace);
  }

  /**
   * Set's the local currentWorkspaceNumber variable to a certain value,
   * according to the index of the given workspace instance
   *
   * @param {Object} workspace A workspace Instance
   * @method setCurrentWorkspace
   * @public
   */
  setCurrentWorkspace(workspace){
    assert("Not a workspace instance", workspace instanceof Workspace);
    assert("Not currently on available workspaces", this.workspaces.includes(workspace));

    this.currentWorkspaceNumber = this.workspaces.indexOf(workspace) + 1;
  }

  /**
   * Returns a existent workspace instance by a given number
   * @param  {Number} number A number that represent the workspace id
   * @return {Object} Workspace Instance
   * @method workspaceByNumber
   * @public
   */
  workspaceByNumber(number){
    assert("Cannot get the workspace", typeof number === 'number' && number >= 1 && number <= this.workspaces.length);
    return this.workspaces.objectAt(number - 1);
  }

  /**
   * Setups the primary workspace
   * @method _setupPrimaryWorkspace
   * @private
   */
  _setupPrimaryWorkspace(){
    this.addWorkspace();
  }

}

export default Workspace;
