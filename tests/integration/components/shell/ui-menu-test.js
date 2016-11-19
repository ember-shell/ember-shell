/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/ui-menu',
  'Integration: ShellUiMenuComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/ui-menu}}
      //     template content
      //   {{/shell/ui-menu}}
      // `);

      this.render(hbs`{{shell/ui-menu}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
