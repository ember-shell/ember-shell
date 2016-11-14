/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import ElementWindowMixin from 'ember-shell/mixins/element/window';

describe('ElementWindowMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementWindowObject = Ember.Object.extend(ElementWindowMixin);
    let subject = ElementWindowObject.create();
    expect(subject).to.be.ok;
  });
});
