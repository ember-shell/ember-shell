import Ember from 'ember';

/**
 @module ember-shell
 @submodule shell-desktop
 */

const {
  A
} = Ember;

/**
 * An Ember-shell Panel
 *
 * @class Panel
 */
const Panel = Ember.Object.extend({});

/**
 * Panel Manager Class
 *
 * @class  PanelManager
 */
export class PanelManager {

  constructor() {
    this.panels = A();
    this._setupPrimaryPanel();
  }

  /**
   * Adds a Panel to the panels list
   *
   * Example:
   * ```javascript
   * panelManager.addPanel();
   * //or
   * panelManager.addPanel({
   *   title: "something",
   *   // ... moreProps ...
   * });
   * ```
   *
   * @param {Object} options Hash of properties to create a Panel
   * @method addPanel
   * @public
   */
  addPanel(options){
    options = options ? options : {};
    let panel = Panel.create(options);
    this.panels.addObject(panel);
    return panel;
  }

  /**
   * Removes a Panel from the panel list
   *
   * Example:
   * ```javascript
   * panelManager.removePanel(panelToRemove);
   * ```
   *
   * @param {Object} panel A panel instance to remove
   * @method removePanel
   * @public
   */
  removePanel(panel){
    let panels = this.panels;
    assert("Can't remove the primary panel", panel.get('isPrimary') === false );

    panels.removeObject(panel);
  }

  /**
   * Setups the primary panel
   * @method _setupPrimaryPanel
   * @private
   */
  _setupPrimaryPanel() {
    this.addPanel({
      isPrimary: true
    });
  }

}

export default Panel;