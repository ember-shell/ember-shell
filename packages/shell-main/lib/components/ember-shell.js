/**
 * @module ember-shell
 * @submodule shell-main
 */

import Ember from 'ember';
import layout from 'ember-shell/templates/main/ember-shell';
import Bussed from 'ember-shell/mixins/bussed';

/**
 * Root component that initializes the ember-shell desktop
 *
 *  Example Usage:
 *
 * ```handlebars
 * {{ember-shell}}
 * ```
 *
 * @class EmberShellComponent
 * @extends Component
 * @extends Bussed
 * @public
 */
export default Ember.Component.extend(Bussed, {
  layout,
  tagName: 'ember-shell',

  manager: Ember.inject.service('shell-manager'),
  bus: Ember.inject.service('shell-bus'),

  init(){
    this._super(...arguments);
    this.get('manager').boot();
  },

  showAppBox: false,

  busActions: {

    channel: "shell",

    showAppBox(){
      this.set('showAppBox', true);
      return true;
    },

    closeAppBox(){
      this.set('showAppBox', false);
      return false;
    },

    toggleAppBox(){
      return this.toggleProperty('showAppBox');
    }

  }


});
