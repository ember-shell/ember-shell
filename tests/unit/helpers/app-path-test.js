/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { appPath } from 'ember-shell/helpers/app-path';

describe('AppPathHelper', function() {
  // Replace this with your real tests.
  it('should return an engine asset relative path by engine name and file relative path', function() {
    let path = "/img/my-assets.svg";
    let name = "test-engine";

    let result = appPath([name, path]);
    expect(result).to.equal(`/engines-dist/${name}/${path}`);
  });
});
