/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/desktop-window',
  'Integration: ShellDesktopWindowComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/desktop-window}}
      //     template content
      //   {{/shell/desktop-window}}
      // `);

      this.render(hbs`{{shell/desktop-window}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
