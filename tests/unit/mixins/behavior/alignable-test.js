/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import AlignableMixin from 'ember-shell/mixins/behavior/alignable';

describe('AlignableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiAlignableObject = Ember.Object.extend(AlignableMixin);
    let subject = UiAlignableObject.create();
    expect(subject).to.be.ok;
  });
});
