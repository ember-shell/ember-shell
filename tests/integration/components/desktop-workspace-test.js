/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/desktop-workspace',
  'Integration: ShellDesktopWorkspaceComponent',
  {
    integration: true
  },
  function() {
    it.skip('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/desktop-workspace}}
      //     template content
      //   {{/shell/desktop-workspace}}
      // `);

      this.render(hbs`{{shell/desktop-workspace}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
