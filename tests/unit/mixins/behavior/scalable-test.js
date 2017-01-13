/* jshint expr:true */
import { expect } from 'chai';
import {describe, it } from 'mocha';
import Ember from 'ember';
import ScalableMixin from 'ember-shell/mixins/behavior/scalable';

describe('UiScalableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiScalableObject = Ember.Object.extend(ScalableMixin);
    let subject = UiScalableObject.create();
    expect(subject).to.be.ok;
  });
});
