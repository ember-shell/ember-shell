import Ember from 'ember';
import PanelItemMixin from 'ember-shell/mixins/element/panel-item';

/**
 @module ember-shell
 @submodule shell-desktop
 */

const {
  A,
  assert
} = Ember;

const defaultOptions = {
  thickness: 36
};

/**
 * An Ember-shell Panel
 *
 * @class Panel
 */
const Panel = Ember.Object.extend({
  init(){
    this._super(...arguments);
    this.items = A();
  }
});

/**
 * Panel Manager Class
 *
 * @class  PanelManager
 * @param {Object} owner Should be the host application
 */
export class PanelManager {

  constructor(owner) {
    this.panels = A();
    this.owner = owner;
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
    options = options ? options : defaultOptions;
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

  insertItem(panel, itemName){
    assert("Panel instance is not registered", this.panels.includes(panel));

    let registeredPath = this._hasRegisteredPath(itemName);
    let checkPanelItem = this._checkPanelItem(itemName);

    assert("The given Item is not registered", registeredPath);
    assert(`${itemName} is not a PanelItem`, checkPanelItem.isPanelItem);

    if(!checkPanelItem.component.get('allowMultiple')) {
      let alreadyThere = panel.items.any((item) => item.name === itemName);
      assert(`${itemName} can only be inserted once`, !alreadyThere);
    }

    let panelItem = {
      name: itemName,
      path: `${registeredPath}${itemName}`
    };

    panel.items.addObject(panelItem);

    return panelItem;
  }

  _hasRegisteredPath(itemName){
    if(this.owner.hasRegistration(`component:${itemName}`)){
      return "";
    } else if(this.owner.hasRegistration(`component:shell/panel/${itemName}`)){
      return "shell/panel/";
    }

    return false;
  }

  _checkPanelItem(itemName){
    let component;

    if(this.owner.hasRegistration(`component:${itemName}`)){
      component = this.owner.lookup(`component:${itemName}`);
    } else if(this.owner.hasRegistration(`component:shell/panel/${itemName}`)){
      component = this.owner.lookup(`component:shell/panel/${itemName}`);
    }

    return {
      isPanelItem: PanelItemMixin.detect(component) || false,
      component
    };
  }

  /**
   * Setups the primary panel
   * @method _setupPrimaryPanel
   * @private
   */
  _setupPrimaryPanel() {
    let panel = this.addPanel({
      isPrimary: true,
      position: "top"
    });

    this.insertItem(panel, 'menu-button');
    this.insertItem(panel, 'clock-date');
    //this.insertItem(panel, 'status-menu');
  }

  calculateAreaLimits() {
    let limits = { top: 0, right: 0, bottom: 0, left: 0 };

    this.panels.forEach((panel) => {
      if(panel.component){
        limits[panel.get('position')] = parseInt(panel.component.element.style["height"]);
      }
    });

    return limits;
  }

}

export default Panel;
