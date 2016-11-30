/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import AnimatableMixin from 'ember-shell/mixins/behaviour/animatable';

describe('AnimatableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiAnimatableObject = Ember.Object.extend(AnimatableMixin);
    let subject = UiAnimatableObject.create();
    expect(subject).to.be.ok;
  });
});
