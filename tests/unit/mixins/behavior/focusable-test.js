/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import FocusableMixin from 'ember-shell/mixins/behavior/focusable';

describe('FocusableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiFocusableObject = Ember.Object.extend(FocusableMixin);
    let subject = UiFocusableObject.create();
    expect(subject).to.be.ok;
  });
});
