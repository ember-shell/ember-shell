/* jshint expr:true */
import { expect } from 'chai';
import { beforeEach } from 'mocha';
import { describeModule, it } from 'ember-mocha';

describeModule(
  'service:shell-manager',
  'ShellManagerService',
  {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  },
  function() {

    beforeEach(function(){
      this.manager = this.subject();
    });
    
    it('exists', function() {
      expect(this.manager).to.be.ok;
    });

    it('it starts with an empty list of running apps', function() {
      expect(this.manager.get('running.length')).to.equal(0);
    });

  }
);
