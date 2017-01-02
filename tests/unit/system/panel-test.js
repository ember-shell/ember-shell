/* jshint expr:true */
import { expect } from 'chai';
import { it } from 'ember-mocha';

import {
  describe,
  beforeEach
} from 'mocha';

import {
  PanelManager
} from 'ember-shell/system/panel';

let manager;

describe('SystemPanel', function() {

  beforeEach(function() {
    /** this won't work unless we have an application as owner */
    manager = new PanelManager();
  });

  it.skip('should initialize with only one primary panel', function() {
    const panel = manager.get('panels.firstObject');

    expect(panel.get('isPrimary')).to.be.true;
    expect(manager.get('panels.length')).to.equal(1);
  });

  it.skip('should be able to add and remove a non-primary panel', function() {
    const panel = manager.addPanel();

    expect(panel.get('isPrimary')).to.be.false;
    expect(manager.get('panels.length')).to.equal(2);

    manager.removePanel(panel);

    expect(manager.get('panels').includes(panel)).to.be.false;
    expect(manager.get('panels.length')).to.equal(1);
  });

});
