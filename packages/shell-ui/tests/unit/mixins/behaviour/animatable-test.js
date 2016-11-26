/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import UiAnimatableMixin from 'ember-shell/mixins/ui/animatable';

describe('UiAnimatableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiAnimatableObject = Ember.Object.extend(UiAnimatableMixin);
    let subject = UiAnimatableObject.create();
    expect(subject).to.be.ok;
  });
});
