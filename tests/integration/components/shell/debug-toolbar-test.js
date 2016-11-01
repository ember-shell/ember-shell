/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/debug-toolbar',
  'Integration: ShellDebugToolbarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/debug-toolbar}}
      //     template content
      //   {{/shell/debug-toolbar}}
      // `);

      this.render(hbs`{{shell/debug-toolbar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
