/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/window/title-bar',
  'Integration: ShellWindowTitleBarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/window/title-bar}}
      //     template content
      //   {{/shell/window/title-bar}}
      // `);

      this.render(hbs`{{shell/window/title-bar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
