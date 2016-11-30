/* jshint expr:true */
import { expect } from 'chai';
import { it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';
import Workspace from 'ember-shell/system/workspace';

describe('EmberShellWorkspace', function() {

    beforeEach(function() {
      this.workspace = Workspace.create();
    });

    it('should have a numerical id', function(){
      let id = this.workspace.get('id');
      expect(id).to.exist;
    });

  }
);
