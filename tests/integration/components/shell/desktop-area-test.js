/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/desktop-area',
  'Integration: ShellDesktopAreaComponent',
  { integration: true },
  function() {

    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/desktop-area}}
      //     template content
      //   {{/shell/desktop-area}}
      // `);

      this.render(hbs`{{shell/desktop-area}}`);
      expect(this.$()).to.have.length(1);
    });
    
  }
);
