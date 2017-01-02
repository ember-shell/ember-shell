/* jshint expr:true */
import { expect } from 'chai';
import { it } from 'ember-mocha';
import Ember from 'ember';

const {
  getOwner
} = Ember;

import {
  describe,
  beforeEach
} from 'mocha';

import {
  ApplicationManager
} from 'ember-shell/system/application';

const TEST_APP_NAME = 'esh-test-app';
let manager;

describe('SystemApplication', function() {

  beforeEach(function() {
    /** this won't work unless we have an application as owner */
    manager = new ApplicationManager(getOwner(this));
  });

  it.skip('should initialize with an empty array of running apps', function() {
    expect(manager.get('apps.length')).to.equal(0);
  });

  it.skip('should be able to start a new app instance by name', function() {
    const appInstance = manager.exec(TEST_APP_NAME);
    expect(manager.get('apps').includes(appInstance)).to.be.ok;
  });

  it.skip('should be able to return a running application by name', function() {
    manager.exec(TEST_APP_NAME);
    const app = manager.getAppByName(TEST_APP_NAME);

    expect(app).to.exist;
    expect(app.get('name')).to.equal(TEST_APP_NAME);
  });

  it.skip('should be able to list available applications', function() {
    expect(0);
  });

  it.skip('should be able to tell that an application is available', function (){
    manager.exec(TEST_APP_NAME);
    expect(manager.isAppAvailable(TEST_APP_NAME)).to.be.true;
  });

  it.skip('should be able to tell that an application is running', function (){
    manager.exec(TEST_APP_NAME);
    expect(manager.isAppRunning(TEST_APP_NAME)).to.be.true;
  });

  it.skip('should be able to close a running application', function() {
    manager.exec(TEST_APP_NAME);
    manager.terminate(TEST_APP_NAME).then( exitCode => {
      expect(exitCode).to.equal(0); // EXIT_OK code number
      expect(manager.isAppRunning(TEST_APP_NAME)).to.be.false;
    });
  });

  it.skip('should be able to kill a running application', function() {
    manager.exec(TEST_APP_NAME);
    expect(manager.terminate(TEST_APP_NAME, true)).to.equal(-1); // EXIT_KILL code number
    expect(manager.isAppRunning(TEST_APP_NAME)).to.be.false;
  });

});
