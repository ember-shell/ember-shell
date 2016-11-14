/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import ElementBoxMixin from 'ember-shell/mixins/element/box';

describe('ElementBoxMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementBoxObject = Ember.Object.extend(ElementBoxMixin);
    let subject = ElementBoxObject.create();
    expect(subject).to.be.ok;
  });
});
