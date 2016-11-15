/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import UiAlignableMixin from 'ember-shell/mixins/ui/alignable';

describe('UiAlignableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiAlignableObject = Ember.Object.extend(UiAlignableMixin);
    let subject = UiAlignableObject.create();
    expect(subject).to.be.ok;
  });
});
