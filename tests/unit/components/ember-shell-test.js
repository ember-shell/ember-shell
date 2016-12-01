/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';

describeComponent(
  'ember-shell',
  'EmberShellComponent',
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
