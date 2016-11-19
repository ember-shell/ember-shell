/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import UiFocusableMixin from 'ember-shell/mixins/ui/focusable';

describe('UiFocusableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiFocusableObject = Ember.Object.extend(UiFocusableMixin);
    let subject = UiFocusableObject.create();
    expect(subject).to.be.ok;
  });
});
