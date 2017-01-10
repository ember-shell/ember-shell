/**
 * @module ember-shell
 * @submodule shell-main
 */

import Ember from 'ember';
import layout from 'ember-shell/templates/main/ember-shell';

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
 * @public
 */
export default Ember.Component.extend({
  layout,
  tagName: 'ember-shell',
  manager: Ember.inject.service('shell-manager')
});
