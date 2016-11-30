/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/desktop-area',
  'Integration: ShellDesktopAreaComponent',
  { integration: true },
  function() {

    it('should render', function() {
      this.render(hbs`{{shell/desktop-area}}`);
      expect(this.$()).to.have.length(1);
    });
    
  }
);
