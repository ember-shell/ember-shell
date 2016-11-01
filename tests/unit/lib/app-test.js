/* jshint expr:true */
import { expect } from 'chai';
import { it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';
import App from 'ember-shell/-private/app';

describe('EmberShellApp', function() {
    
    beforeEach(function() {
      this.asApp = App.create();
    });

    it('should have a name property', function() {
      expect(this.asApp.get('name')).to.be.null;
    });

    it('should have a title property', function() {
      expect(this.asApp.get('title')).to.be.null;
    });

  }
);
