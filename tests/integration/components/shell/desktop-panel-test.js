/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/desktop-panel',
  'Integration: ShellDesktopPanelComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/desktop-panel}}
      //     template content
      //   {{/shell/desktop-panel}}
      // `);

      this.render(hbs`{{shell/desktop-panel}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
