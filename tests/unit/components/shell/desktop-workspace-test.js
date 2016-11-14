/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';

describeComponent(
  'shell/desktop-workspace',
  'ShellDesktopWorkspaceComponent',
  { unit: true },
  function() {

    it('renders', function() {
      // creates the component instance
      let component = this.subject();
      // renders the component on the page
      this.render();
      expect(component).to.be.ok;
      expect(this.$()).to.have.length(1);

    });
  }
);
