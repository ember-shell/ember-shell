/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  appPath
} from 'ember-shell/helpers/app-path';

describe('AppPathHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = appPath(42);
    expect(result).to.be.ok;
  });
});
