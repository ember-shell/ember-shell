/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/ui-button',
  'Integration: ShellUiButtonComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/ui-button}}
      //     template content
      //   {{/shell/ui-button}}
      // `);

      this.render(hbs`{{shell/ui-button}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
