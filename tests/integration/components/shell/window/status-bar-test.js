/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/window/status-bar',
  'Integration: ShellWindowStatusBarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/window/status-bar}}
      //     template content
      //   {{/shell/window/status-bar}}
      // `);

      this.render(hbs`{{shell/window/status-bar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
