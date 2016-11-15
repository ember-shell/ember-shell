/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/panel/main-menu',
  'Integration: ShellPanelMainMenuComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/panel/main-menu}}
      //     template content
      //   {{/shell/panel/main-menu}}
      // `);

      this.render(hbs`{{shell/panel/main-menu}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
