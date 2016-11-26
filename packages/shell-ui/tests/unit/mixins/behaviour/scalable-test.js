/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import UiScalableMixin from 'ember-shell/mixins/ui/scalable';

describe('UiScalableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiScalableObject = Ember.Object.extend(UiScalableMixin);
    let subject = UiScalableObject.create();
    expect(subject).to.be.ok;
  });
});
